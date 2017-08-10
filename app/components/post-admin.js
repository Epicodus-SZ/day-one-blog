import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      this.sendAction('deletePost', post);
    }, //end of delete
    updatePost(post) {
      this.sendAction('gotoUpdate', post);
    }
  } //end of actions
});
