module.exports=function(app) {

  const pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }
  ];

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res){
    const websiteId = req.params['websiteId'];
    const page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    pages.push(page);
    res.json(page);
  }

  function getPagesForWebsiteId(websiteId) {
    const curPages = [];

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === websiteId) {
        curPages.push(pages[i]);
      }
    }
    return curPages;
  }


  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const curPages = getPagesForWebsiteId(websiteId);
    res.json(curPages);
  }


  function getPageById(pageId){
    for(let i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        return pages[i];
      }
    }
  }


  function findPageById(req, res) {
    const pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const newPage = req.body;
    let websiteId = null;
    for(let i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        websiteId = pages[i].websiteId;
        pages[i] = newPage;
        break;
      }
    }
    res.json(getPagesForWebsiteId(websiteId));
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        const websiteId = pages[i].websiteId;
        pages.splice(i, 1);
        const curPages = getPagesForWebsiteId(websiteId);
        res.json(curPages);
        return;
      }
    }
  }

}

