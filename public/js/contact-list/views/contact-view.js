;(function($) {
  ContactList.ContactView = Backbone.View.extend({
    tagName: "div",
    className: "vcard span4",

    initialize: function() {
      this.template = _.template( $("#card-template").html() );
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });
}(jQuery));
