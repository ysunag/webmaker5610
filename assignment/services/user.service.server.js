module.exports=function(app) {


  let users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@bob'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' , email: 'charly@charly'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@jannunzi' }
  ];


  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user?username=username&password=password", findUserByCred);
  app.get("/api/user", findUsers);
  app.delete("/api/user/:userId", deleteUser);


  function createUser(req, res) {
    const user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    res.json(user);
  }


  function findUserByUsername(req, res) {
    const userName = req.params['username'];
    const user = users.find(function (user) {
      return user.username === userName;
    });
    res.json(user);
  }

  function findUserById(req, res){
    const userId = req.params['userId'];
    const user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function findUserByCred(req, res){
    const username = req.query['username'];
    const password  = req.query['password'];
    // const user = users.find(function (user) {
    //   return user.username === username && user.password === password;
    // });
    //
    for(let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function findAllUsers(req, res) {
    res.json(users);
  }

  function updateUserById(req, res) {
    const userId = req.params['userId'];
    const user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].username = user.username;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].email = user.email;

        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function findUsers(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];

    let user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }


  function deleteUser(req, res) {
    const userId = req.params['userId'];
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i, 1);
        res.json(users);
        return;
      }
    }
  }

}

