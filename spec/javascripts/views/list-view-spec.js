describe( "ListView", function() {
  var view;
  var contacts;

  beforeEach( function() {
    loadFixtures( "list.html" );
    contacts = new ContactList.ContactCollection();
    view = new ContactList.ListView({ model: contacts, el: $("#contact-list") });

    // Over-ride the template from the fixture
    view.template = $("#list-template").html();
  });

  describe( "#render", function() {
    beforeEach( function() {
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
      contactView.render.andReturn( contactView );
      contactView.el = $("<p>Contact!</p>");

      spyOn( ContactList, "ContactView" ).andReturn( contactView );

      view.render();
    });

    it( "creates a ContactView for the new element", function() {
      contacts.trigger( 'add', newContact );

      expect( ContactList.ContactView ).toHaveBeenCalledWith({ model: newContact });
    });

    it( "adds the ContactView's content to its own element", function() {
      contacts.trigger( 'add', newContact );

      console.log( $("div.js-contact-list"));
      expect( $("div.js-contact-list p") ).toBeVisible();
    });
  });
});
