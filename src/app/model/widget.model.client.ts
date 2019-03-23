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
  placeholder?: String;
  description?: String;
  height?: String;
  rows?: number;
  class?: String;
  icon?: String;
  deletable?: Boolean;
  formatted?: Boolean;
  constructor(name, _id, widgetType, pageId) {
    this.name = name;
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
