module.exports=function(app) {

  const widgets= [
    { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', name: 'No.1'},
    { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.2'},
    { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'https://justifiedgrid.com/wp-content/uploads/life/biking/137646854.jpg', name: 'No.3'},
    { _id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.4'},
    { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.5'},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/watch?v=0aA5vzTiBa0', name: 'No.6'},
    { _id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.7'}
  ];

  const multer = require("multer"); // npm install multer --save
  const upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  app.put("/api/page/:pageId/widget",reorderWidgets);

  function createWidget(req, res){
    const pageId  = req.params['pageId'];
    const widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widget.pageId= pageId;
    widgets.push(widget);
    res.json(widget);
  }

  function getWidgetsForPageId(pageId) {
    const curWidgets = [];

    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        curWidgets.push(widgets[i]);
      }
    }
    return curWidgets;
  }


  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    const curWidgets = getWidgetsForPageId(pageId);
    res.json(curWidgets);
  }


  function getWidgetById(widgetId){
    for(let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        return widgets[i];
      }
    }
  }


  function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }

  function updateWidget(req, res) {
    const widgetId = req.params['widgetId'];
    const newWidget = req.body;
    let pageId = null;
    for(let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        pageId = widgets[i].pageId;
        widgets[i] = newWidget;
        break;
      }
    }
    res.json(getWidgetsForPageId(pageId));
  }

  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        const pageId = widgets[i].pageId;
        widgets.splice(i, 1);
        const curWidgets = getWidgetsForPageId(pageId);
        res.json(curWidgets);
        return;
      }
    }
  }





  function uploadImage(req, res) {

    const widgetId = req.body.widgetId;
    const width = req.body.width;
    const myFile = req.file;

    const userId = req.body.userId;
    const websiteId = req.body.websiteId;
    const pageId = req.body.pageId;

    const originalname = myFile.originalname; // file name on user's computer
    const filename = myFile.filename;     // new file name in upload folder
    const path = myFile.path;         // full path of uploaded file
    const destination = myFile.destination;  // folder where file is saved to
    const size = myFile.size;
    const mimetype = myFile.mimetype;

    const widget = getWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    const callbackUrl = "/user/"+userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    res.redirect(callbackUrl);
  }


  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }


  function reorderWidgets(req,res) {
    console.log("start index");
    console.log(req.query["start"]);
    console.log("end index");
    console.log(req.query["end"]);
    const startIndex = parseInt(req.query["start"]);
    const endIndex = parseInt(req.query["end"]);

    array_swap(widgets, startIndex, endIndex);
    res.sendStatus(200);
  }
}
