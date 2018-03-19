import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('users', function usersPublication() {
      return Users.find();
    });
}

Meteor.methods({
  'user.find'(uname, pword){
    return Users.find({username: uname, password: pword}).fetch();
  },

  'user.insert'(newUser){
    return Users.insert(newUser);
  },

  'user.getById'(id){
    return Users.find({_id: id}).fetch();
  }
})
