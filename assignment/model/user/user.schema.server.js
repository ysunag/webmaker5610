const mongoose = require('mongoose');
const WebsiteSchema = require('../website/website.schema.server');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  websites: [WebsiteSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Users'});

module.exports = userSchema;
