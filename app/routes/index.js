import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('post');
  },
  actions: {
    createPost() {
      debugger;
      var params = {
        author: this.get('author'),
        imgurl: this.get('inputImageUrl'),
        text: this.get('inputText'),
        title: this.get('inputTitle'),
        timestamp: "June 3, 2016",
      };
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
