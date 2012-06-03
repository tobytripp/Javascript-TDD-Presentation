;(function($) {
  var ContactView = Backbone.View.extend({
    template: _.template( $("#card-template").html() ),

    events: {
      "click .destroy" : "clear"
    },

    initialize: function() {
      this.model.bind( 'change',  this.render, this );
      this.model.bind( 'destroy', this.remove, this );
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },

    clear: function() {
      this.model.destroy();
    }
  });
  App.ContactView = ContactView;
}(jQuery));
