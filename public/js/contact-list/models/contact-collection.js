;(function($) {
  ContactList.ContactCollection = Backbone.Collection.extend({
    url: "/contacts",
    model: ContactList.Contact,
  });
}(undefined));
