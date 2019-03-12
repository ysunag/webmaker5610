module.exports=function(app) {

  const widgets= [
    { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', name: 'No.1'},
    { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.2'},
    { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'http://lorempixel.com/400/200/', name: 'No.3'},
    { _id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.4'},
    { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.5'},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/embed/AM2Ivdi9c4E', name: 'No.6'},
    { _id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.7'}
  ];

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

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
}
