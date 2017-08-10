import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createComment() {
      debugger;
      var date = new Date();
      var dMonth = date.getMonth()+1;
      var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
      var params = {
        author: this.get('author'),
        text: this.get('inputComment'),
        timestamp: dateString,
        post: this.get('post')
      };
      console.log(this);
      this.sendAction('createComment', params);

      //var newComment = this.store.createRecord('comment', params);
      //newComment.save();
      //var newPost = params.post;
      //newPost.get('comments').addObject(newComment);
      //newPost.save();
      //this.transitionTo('index');
    } //end of createComment action
  } //end of actions
});
