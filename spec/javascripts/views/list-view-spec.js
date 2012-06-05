describe( "ListView", function() {
  var view;

  describe( "#render", function() {
    beforeEach( function() {
      jasmine.getFixtures().set( "<div id='contact-list'></div>" );
      var contacts = new ContactList.ContactCollection();
      view = new ContactList.ListView({ model: contacts, el: $("#contact-list") });

      view.render();
    });

    it( "creates a div container", function() {
      expect( $("div.js-contact-list") ).toBeVisible();
    });
  });
});
