describe('menucategories', function () {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('MenuCategoriesApp');

    inject(function ($injector) {
      menucategories = $injector.get('MenuCategoriesService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return categories list', function() {
    // $httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
      var a = $httpBackend.whenGET(ApiBasePath + '/categories.json').respond({"short_name" : "VG"});
      // respond ile get ile alınacak data belirlenir

    menucategories.getMenuCategories().then(function(response) {
      console.log(response.data);
      expect(response.data).toEqual({"short_name" : "VG"});

        // expect(response.data).toEqual(['Lunch', 'Dessert']);
    });
    $httpBackend.flush();
  });

});
