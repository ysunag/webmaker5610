module.exports=function(app) {

  // const widgets= [
  //   { widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', name: 'No.1'},
  //   { widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.2'},
  //   { widgetType: 'IMAGE', pageId: '321', width: '100%',
  //     url: 'https://justifiedgrid.com/wp-content/uploads/life/biking/137646854.jpg', name: 'No.3'},
  //   { widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.4'},
  //   { widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.5'},
  //   { widgetType: 'YOUTUBE', pageId: '321', width: '100%',
  //     url: 'https://www.youtube.com/watch?v=0aA5vzTiBa0', name: 'No.6'},
  //   { widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.7'}
  // ];

  const multer = require("multer"); // npm install multer --save
  const upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  app.put("/api/page/:pageId/widget",reorderWidgets);


  const widgetModel = require('../model/widget/widget.model.server');



  function createWidget(req, res){
    const pageId  = req.params['pageId'];
    const widget = req.body;
    console.log("creating widget!!!!!!!!!!!!!");
    console.log("pageID is" + pageId.toString());
    console.log("widget:" + widget.toString());
    widgetModel
      .createWidget(pageId, widget)
      .then(function(newWidget) {
        console.log("widget created!");
        console.log("new widget is" + newWidget.toString());
        res.json(newWidget);
      }, function(error) {
        if (error) {
          console.log("create widget error" + error);
          res.send(error);
        }
      });
  }




  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        console.log("find widgets by page id:" + widgets);
        res.json(widgets);
      }, function(error) {
        if (error) {
          console.log("Find widgets by page id error:" + error);
          res.send(error);
        }
      });
  }


  // function getWidgetById(widgetId){
  //   widgetModel
  //     .findWidgetById(widgetId)
  //     .then(function(widget) {
  //       console.log("find widget by id:" +  widget);
  //       return widget;
  //     }, function(error) {
  //       if (error) {
  //         console.log("Find widget by id error:" + error);
  //         return null;
  //       }
  //     });
  // }
  //

  function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];

    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        console.log("find widget by id:" +  widget);
        res.json(widget);
      }, function(error) {
        if (error) {
          console.log("Find widget by id error:" + error);
          return null;
        }
      });
  }



  function updateWidget(req, res) {
    const widgetId = req.params['widgetId'];
    const newWidget = req.body;

    widgetModel
      .updateWidget(widgetId, newWidget)
      .then(function(widget) {
        console.log("widget updated!");
        widgetModel
          .findAllWidgetsForPage(widget.pageId)
          .then(function(widgets) {
            console.log("find widgets by page id:" + widgets);
            res.json(widgets);
          }, function(error) {
            if (error) {
              console.log("Find widgets by page id error:" + error);
              res.send(error);
            }
          });
      }, function(error) {
        if (error) {
          console.log("update pages error" + error);
          res.send(error);
        }
      });
  }



  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];

    widgetModel.deleteWidget(widgetId)
      .then(function(page) {
        console.log("widget removed!");
        // widgetModel
        //   .findAllWidgetsForPage(widget.pageId)
        //   .then(function(widgets) {
        //     console.log("find widgets by page id:" + widgets);
        //    res.json(widgets);
          res.json(page.widgets);
      }, function(error) {
        if (error) {
          console.log("delete widget error" + error);
          res.send(error);
        }
      });
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

   // const widget = getWidgetById(widgetId);


    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        console.log("find widget by id:" +  widget);
        widget.url = '/uploads/'+filename;
        const callbackUrl = "/user/"+userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
        res.redirect(callbackUrl);
      }, function(error) {
        if (error) {
          console.log("Find widget by id error:" + error);
          return null;
        }
      });



    // widget.url = '/uploads/'+filename;
    //
    // const callbackUrl = "/user/"+userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
    //
    // res.redirect(callbackUrl);
  }



  function reorderWidgets(req,res) {
    const startIndex = parseInt(req.query["start"]);
    const endIndex = parseInt(req.query["end"]);
    const pageId = req.params['pageId'];

    widgetModel
      .reorderWidget(pageId, startIndex, endIndex)
      .then(function(response) {
        console.log("widgets reordered:" + response);
        res.send("widgets reordered");
      }, function(error) {
        if (error) {
          console.log("reorder widget error:" + error);
          res.send(error);
        }
      });
  }
}
