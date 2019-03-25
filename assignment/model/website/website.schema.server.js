const mongoose = require('mongoose');
const PageSchema = require('../page/page.schema.server');

const websiteSchema = mongoose.Schema({
  developerId: {type: mongoose.Schema.ObjectId, ref: "User"},
  name: String,
  description: String,
  pages: [PageSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Websites'});

module.exports = websiteSchema;
