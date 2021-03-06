import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    model() {
        return Ember.RSVP.hash({
            funders: this.store.findAll('funder'),
            institutions: this.store.findAll('institution'),
            tags: this.store.findAll('tag'),
            venues: this.store.findAll('venue'),
            awards: this.store.findAll('award'),
        });
    },
});
