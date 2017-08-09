import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  imgurl: DS.attr(),
  text: DS.attr(),
  timestamp: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
