import Ember from 'ember';

export default Ember.Route.extend({

  model(){
      return Ember.$.getJSON('faq.json').then(function(data){
        console.log( data );
        return data.data ;
      });
    }
});
