import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    createPost() {
      debugger;
      var date = new Date();
      var dMonth = date.getMonth()+1;
      var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
      var params = {
        author: this.controller.get('author'),
        imgurl: this.controller.get('inputImageUrl'),
        text: this.controller.get('inputText'),
        title: this.controller.get('inputTitle'),
        timestamp: dateString,
      };
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
