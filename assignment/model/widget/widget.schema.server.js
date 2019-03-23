const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
  name: String,
  widgetType: { type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},
  pageId: {type: mongoose.Schema.ObjectId, ref: "Page"},
  size: Number,
  width: String,
  text: String,
  url: String,
  file: File,
  placeholder: String,
  description: String,
  height: String,
  rows: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date()}
}, {collection:'Widgets'});

module.exports = widgetSchema;
