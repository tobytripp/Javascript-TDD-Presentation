describe( "ListView", function() {
  var view;
  beforeEach( function() {
    loadFixtures( "list.html" );
  });

  describe( "#render", function() {
    beforeEach( function() {
      var contacts = new ContactList.ContactCollection();
      view = new ContactList.ListView({ model: contacts, el: $("#contact-list") });

      view.template = $("#list-template").html();
      view.render();
    });

    it( "loads the fixture", function() {
      expect( $("#contact-list") ).toExist();
    });


    it( "creates a div container", function() {
      expect( $("div.js-contact-list") ).toBeVisible();
    });
  });
});
