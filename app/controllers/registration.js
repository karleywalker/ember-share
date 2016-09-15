import Ember from 'ember';

export default Ember.Controller.extend({

    metrics: Ember.inject.service(),
    store: Ember.inject.service(),

    registration: Ember.computed(function() {
        return this.store.createRecord('registration', {});
    })

});