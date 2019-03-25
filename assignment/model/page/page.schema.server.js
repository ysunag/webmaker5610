const mongoose = require('mongoose');
const widgetSchema = require('../widget/widget.schema.server');

const pageSchema = mongoose.Schema({
  name: String,
  title: String,
  websiteId: {type: mongoose.Schema.ObjectId, ref: "Website"},
  widgets: [widgetSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Pages'});

module.exports = pageSchema;
