describe( "ContactList.ContactListController", function() {
  var collection;
  beforeEach( function() {
    collection = { name: "collection" };
    _.extend( collection, Backbone.Events );
    spyOn( ContactList, "ContactCollection" ).andReturn( collection );
  });

  it( "creates a collection for the contacts", function() {
    new ContactList.ContactListController();

    expect( ContactList.ContactCollection ).toHaveBeenCalled();
  });

  it( "creates the view", function() {
    var element    = { name: "container" };

    spyOn( ContactList, "ListView" );
    new ContactList.ContactListController( element );

    expect( ContactList.ListView ).toHaveBeenCalledWith({
      model: collection, el: element
    });
  });

});
