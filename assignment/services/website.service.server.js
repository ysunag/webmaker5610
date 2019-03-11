module.exports=function(app) {


  const websites = [

    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },

    { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },

    { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },

    { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },

    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },

    { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },

    { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }

  ]



  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);



  function findWebsiteById(req, res) {
    const websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }


  function getWebsiteById(websiteId){
    for(let i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        return websites[i];
      }
    }
  }


  function findWebsiteForUser(req, res) {
    const userId = req.params['userId'];
    const curWebsites= getWebsitesForUserId(userId);
    res.json(curWebsites);
  }

  function  getWebsitesForUserId(userId) {
    const curWebsites=[];

    for(let i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        curWebsites.push(websites[i]);
      }
    }
    return curWebsites;
  }

  function createWebsite(req, res){
    const userId = req.params['userId'];
    const website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId;
    websites.push(website);
    const curWebsites = getWebsitesForUserId(userId);
    res.json(curWebsites);
  }

  function updateWebsiteById(req, res){
    const websiteId = req.params['websiteId'];
    const newWebSite = req.body;
    let userId = null;
    for(let i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        userId = websites[i].developerId;
        websites[i] = newWebSite;
        break;
      }
    }
    res.json(getWebsitesForUserId(userId));
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        const userId = websites[i].developerId;
        websites.splice(i, 1);
        const curWebsites = getWebsitesForUserId(userId);
        res.json(curWebsites);
        return;
      }
    }
  }


}
