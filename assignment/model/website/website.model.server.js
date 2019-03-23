const mongoose = require('mongoose');
const websiteSchema = require('./website.schema.server');

const websiteModel = mongoose.model("website",websiteSchema);
const userModel = require("../user/user.model.server");



websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;




function createWebsiteForUser(userId,website) {
  return websiteModel.create(website)
    .then(function(responseWebsite){
      userModel.findUserById(userId)
        .then(function(user){
          user.websites.push(responseWebsite);
          user.save();
          return user.webistes;
        })
    });
}


function findAllWebsitesForUser(userId) {
  return websiteModel.find({"developerId": userId})
  //.populate('developerId')
    .populate('developerId', 'username')
    .exec();
}



function findWebsiteById(id) {
  return websiteModel.findById(id);
}



function updateWebsite(websiteId,website) {
  return websiteModel.findByIdAndUpdate(websiteId,website)
    .then(function (responseWebsite) {
      userModel.update(
        { "_id" : responseWebsite.developerId, "websites._id": websiteId },
      { "$set": { "websites.$": website }},
      function(err, website) {
        console.log(website);
      });
      return responseWebsite;
    });
}



function deleteWebsite(websiteId) {
  return websiteModel.findByIdAndRemove(websiteId)
    .then(function (responseWebsite) {
      userModel.findOne({
        _id: responseWebsite.developerId
      })
        .then(function (user) {
          if (user) {
            user.webistes = user.webistes.filter(function (website) {
              return website._id !== websiteId
            })
            user.save();
            console.log('website removed from user');
            return responseWebsite;
          }
        })
        .catch(function (err) {
          console.log("remove website from user error:" + err);
        });
    });
}
