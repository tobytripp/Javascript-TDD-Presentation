;(function($) {
  ContactList.ListView = Backbone.View.extend({
    template: $("#list-template").html(),

    initialize: function( options ) {
      this.model.on( 'add', this.addOne, this );
    },

    render: function() {
      this.$el.html( this.template );
      return this;
    },

    addOne: function( contact ) {
      new ContactList.ContactView({ model: contact });
    }
  });
}(jQuery));
