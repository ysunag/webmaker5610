module.exports=function(app) {

  // const pages = [
  //   { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
  //   { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
  //   { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }
  // ];

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  const pageModel = require('../model/page/page.model.server');



  // function createPage(req, res) {
  //   for (let i = 0; i < pages.length; i++) {
  //     pageModel
  //       .createPage(page[i].websiteId,page[i])
  //       .then(function(pages) {
  //         console.log("page created!");
  //
  //       }, function(error) {
  //         if (error) {
  //           console.log("create page error" + error);
  //           res.statusCode(400).send(error);
  //         }
  //       });
  //   }
  // }




  function createPage(req, res){
    const websiteId = req.params['websiteId'];
    const page = req.body;

    pageModel
      .createPage(websiteId,page)
      .then(function(pages) {
        console.log("page created!");
        res.json(pages);
      }, function(error) {
        if (error) {
          console.log("create page error" + error);
          res.statusCode(400).send(error);
        }
      });
  }




  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];

    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function(pages) {
        console.log("find pages by user id:" + pages);
        res.json(pages);
      }, function(error) {
        if (error) {
          console.log("Find pages by user id error:" + error);
          res.statusCode(404).send(error);
        }
      });
  }



  function findPageById(req, res) {
    const pageId = req.params['pageId'];

    pageModel
      .findPageById(pageId)
      .then(function(page) {
        console.log("find page by id:" + page);
        res.json(page);
      }, function(error) {
        if (error) {
          console.log("Find page by id error:" + error);
          res.statusCode(404).send(error);
        }
      });
  }



  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const newPage = req.body;
    pageModel
      .updatePage(pageId, newPage)
      .then(function(page) {
        console.log("page updated!");
        pageModel
          .findAllPagesForWebsite(page.websiteId)
          .then(function(pages) {
            console.log("find pages by website id:" + pages);
            res.json(pages);
          }, function(error) {
            if (error) {
              console.log("Find pages by website id error:" + error);
              res.statusCode(404).send(error);
            }
          });
      }, function(error) {
        if (error) {
          console.log("update pages error" + error);
          res.statusCode(400).send(error);
        }
      });
  }



  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function(page) {
        console.log("page removed!");
        pageModel
          .findAllPagesForWebsite(page.websiteId)
          .then(function(pages) {
            console.log("find pages by website id:" + pages);
            res.json(pages);
          }, function(error) {
            if (error) {
              console.log("Find pages by website id error:" + error);
              res.statusCode(404).send(error);
            }
          });
      }, function(error) {
        if (error) {
          console.log("delete page error" + error);
          res.statusCode(400).send(error);
        }
      });
  }

