var DayButtonView = Backbone.View.extend({
  //el: '#day-btn-container',
  buildHTML : _.template($("#button_template").html()),
  render: function() {
    //this.$el.append('<button class="btn btn-default btn-primary">Day ' + temp_days.length + '</button>'); // admittedly still yucky
    this.setElement(this.buildHTML({dayNum: temp_days.length}));  

//this.$el.append(this.buildHTML({dayNum: temp_days.length}));        

    return this; //for chaining
  }

});