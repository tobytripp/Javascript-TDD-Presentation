;(function($) {
  ContactList.ContactCollection = Backbone.Collection.extend({
    url: "/contacts",
    model: ContactList.Contact,

    parse: function( response ) {
      return response.contacts;
    }
  });
}(undefined));
