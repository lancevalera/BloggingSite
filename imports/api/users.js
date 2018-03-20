import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('users', function usersPublication() {
      return Users.find();
    });
}

Meteor.methods({
  //finds and returns an object of the user profile
  'user.find'(uname, pword){
    var user = Users.find({username: uname, password: pword}).fetch();
    var returnUser = {
      username: user[0].username,
      fname: user[0].fname,
      lname: user[0].lname,
      _id: user[0]._id
    }
    return returnUser
  },

  //inserts a new user if the username doesn't already exist in the db
  //returns a status and a msg
  'user.insert'(newUser){
    var usernameExists = Users.find({username: newUser.username}).fetch();
    if(usernameExists.length > 0)
      return {status: false, msg: "Username already taken"}
    else
      return {status: true, msg: Users.insert(newUser)};
  },

  //finds and returns a user based on the id
  'user.getById'(id){
    var user = Users.find({_id: id}).fetch();
    var returnUser = {
      username: user[0].username,
      fname: user[0].fname,
      lname: user[0].lname,
      _id: user[0]._id
    }
    return returnUser
  }
})
