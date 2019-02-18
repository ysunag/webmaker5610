import {Injectable} from '@angular/core';


@Injectable()
export class WidgetService {

  constructor() {}

  widgets = [
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


  api = { 'createWidget' : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };


  createWidget(pageId, widget)   {
    widget._id = Math.random().toString(36).substr(2, 9);
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId)  {
    const res = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        res.push(this.widgets[x]);
      }
    }
    return res;
  }

  findWidgetById(widgetId)   {
    for (const widget of this.widgets) {
      if (widget._id === widgetId) {
        return widget;
      }
    }
  }
  updateWidget(widgetId, widget)   {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets[i] = widget;
        return;
      }
    }
  }

  deleteWidget(widgetId) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
