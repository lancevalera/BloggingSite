import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.publish('posts', function() {
      return Posts.find();
    });
}

Meteor.methods({
  //gets all posts, ordering by date created
  'posts.getAll'(){
    return Posts.find({}, {sort: {dateCreated: -1}}).fetch();
  },

  //inserts a post, returning the postId
  'posts.insert'(newPost){
    var success = Posts.insert(newPost);
    return success;
  },

  //returns a singlepost based on the unique Id
  'posts.getById'(id){
    return Posts.find({_id: id}).fetch();
  },

  //deletes post
  'post.delete'(id){
    return Posts.remove({_id: id});
  },

  //sets the post to the new values based on the id
  'post.update'(id, newPost){
    return Posts.update({_id: id}, newPost);
  },

  //gets posts by author, ordering by date created
  'posts.getByUser'(id){
    return Posts.find({authorID: id}, {sort: {dateCreated: -1}}).fetch();
  }
})
