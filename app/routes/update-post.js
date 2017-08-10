import Ember from 'ember';

export default Ember.Route.extend({
  // model(post) {
  //   debugger;
  //   return this.store.findRecord('post', post.post_id);
  // },
  actions: {
    gotoPost(post) {
      debugger;
      console.log("we made it to update-post");
      this.transitionTo('post', post);
    },
    gotoUpdate(post){
      this.transitionTo('update-post', post);
    }
  }
});
