;(function($) {
  ContactList.ListView = Backbone.View.extend({
    tagName:   "div",
    className: "js-contact-list",

    initialize: function( options ) {},

    render: function() {
      this.$el.html( "<div class='js-contact-list'></div>" );
      return this;
    }
  });
}(jQuery));
