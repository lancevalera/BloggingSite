import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.publish('posts', function() {
      return Posts.find();
    });
}

Meteor.methods({
  'posts.getAll'(){
    return Posts.find().fetch();
  },

  'posts.insert'(newPost){
    var success = Posts.insert(newPost);
    return success;
  }
})
