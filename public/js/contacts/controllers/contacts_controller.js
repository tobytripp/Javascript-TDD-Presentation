;(function($) {
  var ContactsController = function( el ) {
    this.contacts = new App.ContactList();
    this.view = new App.ContactListView({ model: this.contacts, el: el });

    function handler( collection, response ) {
      console.log( arguments );
    }

    this.contacts.fetch({
      success: handler, error: handler, failure: handler
    });
  }

  App.ContactsController = ContactsController;
}(undefined)); // No jQuery for you!
