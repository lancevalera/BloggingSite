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
  },

  'posts.getById'(id){
    return Posts.find({_id: id}).fetch();
  },

  'post.delete'(id){
    return Posts.deleteOne({_id: id});
  }
})
