module.exports=function(app) {


  // let users = [
  //   {username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice'},
  //   {username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@bob'},
  //   {username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' , email: 'charly@charly'},
  //   {username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@jannunzi' }
  // ];


  const userModel = require('../model/user/user.model.server');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const FacebookStrategy = require('passport-facebook').Strategy;
  const facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };

  const bcrypt = require("bcrypt-nodejs");


  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

 // passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));


  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.post ('/api/loggedin', loggedin);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));


  function serializeUser(user, done) {
    done(null, user);
  }


  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }


  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function(user) {
       //   if(user && bcrypt.compareSync(password, user.password)) {
            if(user && password === user.password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }


  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            const names = profile.displayName.split(" ");
            const newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }



  function login(req, res) {
    const user = req.user;
    res.json(user);
  }


  function logout(req, res) {
    req.logOut();
    // res.sendStatus(200);
  }

  function register (req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }





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
          res.send(error);
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

