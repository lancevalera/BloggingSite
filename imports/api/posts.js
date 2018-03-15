import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.publish('posts', function() {
    console.log(Posts.find().fetch())
      return Posts.find();
    });
}
