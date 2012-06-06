describe( "ContactList.ContactView", function() {
  var data = {
    "name": { "first": "Sim", "last": "Wyman" },
    "url": "http://www.schaefer.biz.biz",
    "email": "selena@sanford.info",
    "address": {
      "streetAddress":"4679 Leanne Branch Apt. 330",
      "city":"East Dedrick",
      "state":"Connecticut","zip":"50962"
    },
    "phone": "1-237-138-5650 x1243",
    "jabber": "aida@ondricka.biz"
  }
  var contact, view;

  beforeEach( function() {
    loadFixtures( "list.html" );
    contact = new ContactList.Contact( data );
    view    = new ContactList.ContactView({ model: contact });

    $("#contact-list").append( view.render().el );
  });

  it( "wraps its content in a vcard container", function() {
    expect( $(".vcard.span4") ).toBeVisible();
  });


  it( "renders the model into its template", function() {
    expect( $(".vcard p.name") ).toHaveText( data.name.first + " " + data.name.last );
  });
});
