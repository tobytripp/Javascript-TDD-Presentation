;(function($) {
  window.ContactList = function ( element ) {
    new ContactList.ContactListController( element );
  }

  $(function() {
    var app = new ContactList( $("#contact-list")[0] );
  });
}(jQuery));
