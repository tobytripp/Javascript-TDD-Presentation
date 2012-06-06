;(function($) {
  ContactList.ContactListController = function( el ) {
    this.collection = new ContactList.ContactCollection();
    new ContactList.ListView({ model: this.collection, el: el });
    this.collection.fetch();
  }
}(undefined)); // Disallow jQuery access...
