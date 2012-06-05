;(function($) {
  ContactList.ListView = Backbone.View.extend({
    template: $("#list-template").html(),

    initialize: function( options ) {},

    render: function() {
      this.$el.html( this.template );
      return this;
    }
  });
}(jQuery));
