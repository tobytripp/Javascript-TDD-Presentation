describe( "ListView", function() {
  var view;
  var contacts;

  beforeEach( function() {
    loadFixtures( "list.html" );
    contacts = new ContactList.ContactCollection();
    view = new ContactList.ListView({ model: contacts, el: $("#contact-list") });
  });

  describe( "#render", function() {
    beforeEach( function() {
      // Over-ride the template from the fixture
      view.template = $("#list-template").html();
      view.render();
    });

    it( "creates a div container", function() {
      expect( $("div.js-contact-list") ).toBeVisible();
    });
  });

  describe( "when the collection adds an element", function() {
    var newContact;
    var contactView;

    beforeEach( function() {
      newContact = { name: 'Bob' };
      _.extend( newContact, Backbone.Events );

      contactView = jasmine.createSpyObj( "contactView", ["render"] );
    });

    it( "creates a ContactView for the new element", function() {
      spyOn( ContactList, "ContactView" );

      contacts.trigger( 'add', newContact );

      expect( ContactList.ContactView ).toHaveBeenCalledWith({ model: newContact });
    });

    it( "adds the ContactView's content to its own element", function() {
      contactView.el = $("<p>Contact!</p>");
      contactView.render.andReturn( contactView );

      contacts.trigger( 'add', newContact );

      expect( $("div.js-contact-list>p") ).toBeVisible();
    });
  });
});
