export class Widget {
  name: String;
  _id: String;
  widgetType: String;
  pageId: String;
  size?: number;
  width?: String;
  text?: String;
  url?: String;
  file?: File;
  constructor(name, _id, widgetType, pageId) {
    this.name = name;
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
