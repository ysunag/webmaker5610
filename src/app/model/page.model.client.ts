export class Page {
  _id: String;
  name: String;
  title: String;
  websiteId: String;


  constructor(_id, pageName, pageTitle, websiteId) {
    this._id = _id;
    this.name = pageName;
    this.title = pageTitle;
    this.websiteId = websiteId;
  }

}
