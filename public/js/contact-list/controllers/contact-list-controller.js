;(function($) {
  ContactList.ContactListController = function( el ) {
    this.collection = new ContactList.ContactCollection();
    new ContactList.ListView({ model: this.collection, el: el });
  }
}(undefined)); // Disallow jQuery access...
