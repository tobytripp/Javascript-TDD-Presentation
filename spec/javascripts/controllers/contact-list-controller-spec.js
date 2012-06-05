describe( "ContactList.ContactListController", function() {
  it( "creates a collection for the contacts", function() {
    spyOn( ContactList, "ContactCollection" );
    new ContactList.ContactListController();

    expect( ContactList.ContactCollection ).toHaveBeenCalled();
  });

  it( "creates the view", function() {
    var collection = { name: "collection" };
    var element    = { name: "container" };
    spyOn( ContactList, "ContactCollection" ).andReturn( collection );

    spyOn( ContactList, "ListView" );
    new ContactList.ContactListController( element );

    expect( ContactList.ListView ).toHaveBeenCalledWith({
      model: collection, el: element
    });
  });

});
