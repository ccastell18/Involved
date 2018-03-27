const User = require('../../models/User');
const UserSession = require('../../models/UserSession')
module.exports = (app) => {

app.post('/api/account/signup', (req,res, next) =>{
  const { body } = req;
  const {
    password,
    address,
    city,
    state,
    zipcode
  }= body;
  let{
    email
  }= body;

  if(!email){
    return res.send({
      success: false,
      message: 'error: Email cannot be blank'
    });
  }
  if(!password){
    return res.send({
      success: false,
      message: 'error: Password cannot be blank'
    });
  }
  if(!address){
    return res.send({
      success: false,
      message: 'error:  Address cannot be blank'
    });
  }
  if(!city){
    return res.send({
      success: false,
      message: 'error: City cannot be blank'
    });
  }
  if(!state){
    return res.send({
      success: false,
      message: 'error: State cannot be blank'
    });
  }
  if(!zipcode){
    return res.send({
      success: false,
      message: 'error: Zipcode cannot be blank'
    });
  }

  email = email.toLowerCase();
    //check email doesn't exist
    //save
    User.find({
      email:email
    }, (err,previousUsers) =>{
      if(err){
        return res.send({
          success: false,
          message: "error: server"
        })
      }else if(previousUsers.length > 0){
        return res.send({
          success: false,
          message: "Error: Account already exists."
        });
      }

      const newUser = new User();

      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.address = address;
      newUser.city = city;
      newUser.state = state;
      newUser.zipcode= zipcode;
      newUser.save((err, user) => {
        if(err){
          return res.send({
            success: false,
            message: "Error: Account already exists."
          });
        }
        return res.send({
          success: true,
          message: "Signed Up"
        });
      });
    });
  });


  app.post('/api/account/signin', (req,res, next) =>{
    const { body } = req;
    const {
      password
    }= body;
    let{
      email
    }= body;

    if(!email){
      return res.send({
        success: false,
        message: 'error: Email cannot be blank'
      });
    }
    if(!password){
      return res.send({
        success: false,
        message: 'error: Password cannot be blank'
      });
    }
    email = email.toLowerCase();

    User.find({
      email: email
    }, (err, users) => {
      if(err){
        return res.send({
          success: false,
          message: "error: Server error"
        });
      }
      if(users.length != 1){
        return res.send({
          success: false,
          message: "error: Invalid"
        });
      }

      const user = users[0]
      if(!user.validPassword(password)){
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if(err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });
    });
  });

  app.post('/api/account/verify', (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if(err){
        return res.send({
          success: false,
          message: "error: server error"
        });
      }
      if(sessions.length != 1){
        return res.send({
          success.false,
          message: 'Error: Invalid'
        });
      }else {
        return res.send({
          success: true,
          message: "Good"
        });
      }
    });
  });
  app.get('/api/account/logout', (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
      _id: token,
      idDeleted: false
    },{
      $set: {
        isDeleted: true
      }
    }, null,(err, sessions) => {
      if(err){
        console.log(err);
        return res.send({
          success: false,
          message: "server error"
        });
      }
      return res.send({
        success: true,
        message: 'Good'
      });
    });
  });
};
