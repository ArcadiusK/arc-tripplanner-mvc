var Trip = Backbone.Model.extend({
    initialize: function() {
        this.set('days', new DaysCollection());
        this.set('currentDay', null);
    }
});