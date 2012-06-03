;(function($) {
  var ContactList = Backbone.Collection.extend({
    url: "/contacts",
    model: App.Contact,

    comparator: function( contact ) {
      return contact.name;
    },

    addOne: function( contact ) {
      var view = new ContactView({ model: contact });
      this.$("#contact-list").append( view.render().el );
    },

    parse: function( response ) {
      return response.contacts;
    }
  });
  App.ContactList = ContactList;
}(undefined));
