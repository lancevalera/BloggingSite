import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('users', function usersPublication() {
      return Users.find();
    });
}

Meteor.methods({
  'user.find'(uname, pword){
    var user = Users.find({username: uname, password: pword}, {fname: 1, lname: 1, username: 1}).fetch();
    var returnUser = {
      username: user[0].username,
      fname: user[0].fname,
      lname: user[0].lname,
      _id: user[0]._id
    }
    return returnUser
  },

  'user.insert'(newUser){
    return Users.insert(newUser);
  },

  'user.getById'(id){
    var user = Users.find({_id: id}, {fname: 1, lname: 1, username: 1}).fetch();
    var returnUser = {
      username: user[0].username,
      fname: user[0].fname,
      lname: user[0].lname,
      _id: user[0]._id
    }
    return returnUser
  }
})
