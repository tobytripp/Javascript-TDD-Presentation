describe( "ContactList.ContactCollection", function() {
  var TestResponse = {
    index: {
      success: {
        status: 200,
        responseText: '{"contacts":[' +
          '{"name":{"first":"Sim","last":"Wyman"},'
          + '"url":"http://www.schaefer.biz.biz","email":"selena@sanford.info",'
          + '"address":{"streetAddress":"4679 Leanne Branch Apt. 330",'
          + '"city":"East Dedrick","state":"Connecticut","zip":"50962"},'
          + '"phone":"1-237-138-5650 x1243","jabber":"aida@ondricka.biz"},' +
          '{"name":{"first":"Flavio","last":"Hirthe"},'
          + '"url":"http://www.andersonbahringer.info.org","email":"felix@streichwolff.info",'
          + '"address":{"streetAddress":"5640 Anne Village Suite 123","city":"Hicklefort",'
          + '"state":"Oklahoma","zip":"64729"},'
          + '"phone":"1-540-742-1233 x43732","jabber":"laurine_bergnaum@murraykoch.name"}'
          + ']}'
      }
    }
  };

  var collection;

  beforeEach( function() {
    jasmine.Ajax.useMock();

    collection = new ContactList.ContactCollection();
  });

  describe( "#fetch", function() {
    beforeEach( function() {
      collection.fetch();

      request = mostRecentAjaxRequest();
      request.response( TestResponse.index.success );
    });

    it( "fetches the current contacts from the server", function() {
      expect( collection.size() ).toEqual( 2 );
    });
  });
});
