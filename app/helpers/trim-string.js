import Ember from 'ember';

export function trimString(params){
  var tmpText = String(params);
  if (tmpText.length > 250) {
    var theString = tmpText.substring(0,250);
    return new Ember.Handlebars.SafeString(theString);
  }
  else {
      return tmpText;
  }
}

export default Ember.Helper.helper(trimString);
