export class Website {
  _id: String;
  developerId: String;
  name: String;
  description: String;


  constructor(_id, websiteName, websiteDescription, developerId) {
    this._id = _id;
    this.name = websiteName;
    this.description = websiteDescription;
    this.developerId = developerId;
  }

}
