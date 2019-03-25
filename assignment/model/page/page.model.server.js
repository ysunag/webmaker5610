const mongoose = require('mongoose');
const pageSchema = require('./page.schema.server');

const pageModel = mongoose.model("Page",pageSchema);
const websiteModel = require("../website/website.model.server");



pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;




function createPage(websiteId,page) {
  return pageModel.create(page)
    .then(function(responsePage){
      websiteModel.findWebsiteById(websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          website.save();
          return website.pages;
        })
    });
}


function findAllPagesForWebsite(websiteId) {
  return pageModel.find({"websiteId": websiteId})
  //.populate('developerId')
    .populate('websiteId', 'name')
    .exec();
}



function findPageById(id) {
  return pageModel.findOne({_id: id});
}



function updatePage(pageId,page) {
  return pageModel.findOneAndUpdate({_id: pageId},page)
    .then(function (responsePage) {
      websiteModel.update(
        { "_id" : responsePage.websiteId, "pages._id": pageId },
        { "$set": { "pages.$": page }},
        function(err, page) {
          console.log(page);
        });
      return responsePage;
    });
}



function deletePage(pageId) {
  return pageModel.findOneAndDelete({_id: pageId})
    .then(function (responsePage) {
      websiteModel.findOne({
        _id: responsePage.websiteId
      })
        .then(function (website) {
          if (website) {
            website.pages = website.pages.filter(function (page) {
              return page._id !== pageId
            });
            website.save();
            console.log('page removed from website');
            return responsePage;
          }
        })
        .catch(function (err) {
          console.log("remove page from website error:" + err);
        });
    });
}
