var App = function( el ) {
  this.controller = new App.ContactsController( el );
  return this;
}

$(function() {
  var app = new App( $("#contact-list")[0] );
  $("#contact-list").data( "app", app );
});
