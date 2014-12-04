var ActivitySelectView = Backbone.View.extend({
  optionsArray : [],
  name : "",
  template : _.template($("#activity_view_template").html()),
  render: function() {
   // this.setElement(this.template({options: this.optionsArray}));  
 this.setElement(this.template({options: this.optionsArray}));  

    return this; //for chaining
  }

});