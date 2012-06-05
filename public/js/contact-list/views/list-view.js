;(function($) {
  ContactList.ListView = Backbone.View.extend({
    className: "js-contact-list",

    initialize: function( options ) {
      this.model.on( 'add', this.addOne, this );
    },

    render: function() {
      this.$el.addClass( this.className );
      return this;
    },

    addOne: function( contact ) {
      var view = new ContactList.ContactView({ model: contact });
      this.$el.append( view.render().el );
    }
  });
}(jQuery));
