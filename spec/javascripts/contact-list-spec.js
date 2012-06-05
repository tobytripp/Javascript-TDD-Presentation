describe( "ContactList", function() {
  it( "accepts a container element in its constructor", function() {
    new ContactList( $("#my-contact-list") );
  });

  it( "creates a ContactListController with the element", function() {
    var el = $("#my-contact-list");
    spyOn( ContactList, "ContactListController" );

    new ContactList( el );

    expect( ContactList.ContactListController ).toHaveBeenCalledWith( el );
  });

});
