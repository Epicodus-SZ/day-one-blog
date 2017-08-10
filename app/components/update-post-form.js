import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post) {
      debugger;
      post.save();
      this.sendAction('gotoPost', post);
    }
  }
});
