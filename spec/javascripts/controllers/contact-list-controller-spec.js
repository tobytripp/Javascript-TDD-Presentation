describe( "ContactList.ContactListController", function() {
  it( "creates a collection for the contacts", function() {
    spyOn( ContactList, "ContactCollection" );
    new ContactList.ContactListController();

    expect( ContactList.ContactCollection ).toHaveBeenCalled();
  });

});
