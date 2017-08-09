import Ember from 'ember';

export function trimString(params){
  var tmpText = String(params);
  if (tmpText.length > 20) {
    var theString = tmpText.substring(0,20);
    return new Ember.Handlebars.SafeString(theString);
  }
  else {
      return tmpText;
  }
}

export default Ember.Helper.helper(trimString);
