const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model("User",userSchema);


userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;



function createUser(user) {
  console.log("model"+user);
  return userModel.create(user);
}

function findUserById(id) {
  return userModel.findOne({_id: id});
}

function findUserByUserName(userName) {
  return userModel.findOne({username: userName});
}

function findByCredential(username,password){
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId,user) {
  return userModel.findOneAndUpdate({_id: userId},user,{new: true});
}

function deleteUser(userId){
  return userModel.findOneAndDelete({_id: userId});
}
