console.log(data);

var TripView = Backbone.View.extend({
  el: '#trip',
  events: {
    'click #add-day':'addDay'
  },


  
  initialize: function () {
      var genAcView = new ActivitySelectView();
      genAcView.optionsArray = data.Hotel;
      var activitySelectViewHotels = genAcView.render(); 
      this.$el.find('#hotels_container').append(activitySelectViewHotels.$el);
      

      var genAcView = new ActivitySelectView();
       genAcView.optionsArray = data.ThingToDo;
      var activitySelectViewThings = genAcView.render(); 
      this.$el.find('#things_container').append(activitySelectViewThings.$el);

      var genAcView = new ActivitySelectView();
      genAcView.optionsArray = data.Restaurant;
      var activitySelectViewRestaurants = genAcView.render(); 
      this.$el.find('#restaurants_container').append(activitySelectViewRestaurants.$el);

      this.listenTo(temp_days, 'add', this.createDayBtn);
      this.model = new Trip();
    },
  addDay: function() { 
    temp_days.add({})
    console.log('adding day!') 
    var newDay = new Day();
    newDay.hotel = 'Hello Ben';
    newDay.thingsToDo = ['Things Ben'];
    newDay.restaurants = ['Restaurants Ben'];
    console.log("this.model is a TripView: ", this.model);
 
  },
// createDayBtn: function() {
//   //<yuck>
//   this.$el.find('#day-btn-container').append('<button class="btn btn-default btn-primary">Day ' + temp_days.length + '</button>');
//   //</yuck>
// }

createDayBtn: function(dayModel) {
  //<less-yuck>
  var view = new DayButtonView({ model: dayModel }).render();
  console.log(view.$el);
  this.$el.find('#day-btn-container').append(view.$el);
  //</less-yuck>
  var day = new Day({});
}

})