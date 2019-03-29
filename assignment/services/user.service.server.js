module.exports=function(app) {


  // let users = [
  //   {username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice'},
  //   {username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@bob'},
  //   {username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' , email: 'charly@charly'},
  //   {username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@jannunzi' }
  // ];


  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUser);
  app.delete("/api/user/:userId", deleteUser);

  const userModel = require('../model/user/user.model.server');





  function createUser(req, res) {
    const user = req.body;
    userModel
      .createUser(user)
      .then(function(user) {
        console.log("user created!");
        res.json(user);
      }, function(error) {
        if (error) {
          console.log("create user error" + error);
          res.statusCode(400).send(error);
        }
      });

  }


  // function findUserByUsername(req, res) {
  //   const userName = req.params['username'];
  //   userModel
  //     .findUserByUserName(userName)
  //     .then(function(user) {
  //       console.log("find user by username:" + user);
  //       res.json(user);
  //     }, function(error) {
  //       if (error) {
  //         console.log("Find user by username error:" + error);
  //         res.statusCode(404).send(error);
  //       }
  //     });
  // }

  function findUserById(req, res){
    const userId = req.params['userId'];
    userModel
      .findUserById(userId)
      .then(function(user) {
        console.log("find user by id:" + user);
        res.json(user);
      }, function(error) {
        if (error) {
          console.log("Find user by id error:" + error);
          res.statusCode(404).send(error);
        }
      });
  }

  function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      const promise = userModel.findByCredential(username, password);
      promise.then(function (user) {
        res.json(user);
        //console.log(user);
      })
      return;
    } else if (username) {
      userModel.findUserByUserName(username)
        .then(function (user) {
          res.json(user);
        })
      return;
    }
    res.json(users);
  }





  function updateUserById(req, res) {
    const userId = req.params['userId'];
    const user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    userModel
      .updateUser(userId,user)
      .then(function(user) {
        console.log("update user:" + user);
        res.json(user);
      }, function(error) {
        if (error) {
          console.log("update user error:" + error);
          res.send(error);
        }
      });

  }



  function deleteUser(req, res) {
    const userId = req.params['userId'];
    userModel
      .deleteUser(userId)
      .then(function(user) {
        console.log("delete user:" + user);
        res.json(user);
      }, function(error) {
        if (error) {
          console.log("delete user error:" + error);
          res.statusCode(400).send(error);
        }
      });
  }

}

