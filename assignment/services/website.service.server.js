module.exports=function(app) {


  // const websites = [
  //
  //   {name: 'Facebook', developerId: '456', description: 'Lorem' },
  //
  //   {name: 'Tweeter', developerId: '456', description: 'Lorem' },
  //
  //   {name: 'Gizmodo', developerId: '456', description: 'Lorem' },
  //
  //   {name: 'Go', developerId: '123', description: 'Lorem' },
  //
  //   {name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
  //
  //   {name: 'Checkers', developerId: '123', description: 'Lorem' },
  //
  //   {name: 'Chess', developerId: '234', description: 'Lorem' }
  //
  // ];



  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);

  const websiteModel = require('../model/website/website.model.server');


  function findWebsiteById(req, res) {
    const websiteId = req.params['websiteId'];

    websiteModel
      .findWebsiteById(websiteId)
      .then(function(website) {
        console.log("find website by id:" + website);
        res.json(website);
      }, function(error) {
        if (error) {
          console.log("Find website by id error:" + error);
        }
      });

  }



  function findWebsiteForUser(req, res) {
    const userId = req.params['userId'];

    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function(websites) {
        console.log("find websites by user id:" + websites);
        res.json(websites);
      }, function(error) {
        if (error) {
          console.log("Find websites by user id error:" + error);
          res.send(error);
        }
      });

  }






  function createWebsite(req, res){
    const userId = req.params['userId'];
    const website = req.body;

    websiteModel
      .createWebsiteForUser(userId,website)
      .then(function(websites) {
        console.log("website created!");
        res.json(websites);
      }, function(error) {
        if (error) {
          console.log("create website error" + error);
          res.send(error);
        }
      });
  }



  function updateWebsiteById(req, res){
    const websiteId = req.params['websiteId'];
    const newWebSite = req.body;

    websiteModel
      .updateWebsite(websiteId,newWebSite)
      .then(function(website) {
        console.log("website updated!");
        websiteModel
          .findAllWebsitesForUser(website.developerId)
          .then(function(websites) {
            console.log("find websites by user id:" + websites);
            res.json(websites);
          }, function(error) {
            if (error) {
              console.log("Find websites by user id error:" + error);
              res.send(error);
            }
          });
      }, function(error) {
        if (error) {
          console.log("update website error" + error);
          res.send(error);
        }
      });
  }




  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (website) {
        console.log("website removed!");
        // websiteModel
        //   .findAllWebsitesForUser(website.developerId)
        //   .then(function (websites) {
        //     console.log("find websites by user id:" + websites);
        //     res.json(websites);
        //   }, function (error) {
        //     if (error) {
        //       console.log("Find websites by user id error:" + error);
        //       res.send(error);
        //     }
        //   });
        res.json(website);
      }, function (error) {
        if (error) {
          console.log("delete website error" + error);
          res.send(error);
        }
      });
  }
}
