;(function($) {
  var ContactListView = Backbone.View.extend({
    tagName: "div",
    className: "js-contact-list row-fluid",
    template: _.template( $("#list-template").html() ),

    events: {
    },

    initialize: function( options ) {
      this.model.bind( 'add',   this.addOne, this );
      this.model.bind( 'reset', this.addAll, this );
      this.model.bind( 'all',   this.render, this );
    },

    render: function() {
    },

    addOne: function( contact ) {
      var view = new App.ContactView({ model: contact });
      this.$el.append( view.render().el );
    },

    addAll: function() {
      this.model.each( this.addOne, this );
    }
  });

  App.ContactListView = ContactListView;
}(jQuery));
