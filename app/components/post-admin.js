import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      debugger;
      this.sendAction('deletePost', post);
    } //end of delete
  } //end of actions
});
