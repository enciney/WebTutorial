describe('shoppingList directive', function() {
  var $compile;
  var $rootScope;
  var $controller ;

  var expectedHtml = '<h3 class="ng-binding">test title</h3>\
  <ol>\
    <!-- ngRepeat: item in list.items --><li ng-repeat="item in list.items" class="ng-binding ng-scope"> \
      1 of item 1 \
      <button ng-click="list.removeItem($index);">Remove Item</button> \
    </li><!-- end ngRepeat: item in list.items --><li ng-repeat="item in list.items" class="ng-binding ng-scope"> \
      2 of item 2 \
      <button ng-click="list.removeItem($index);">Remove Item</button> \
    </li><!-- end ngRepeat: item in list.items --> \
  </ol>'.replace(/\s/g, ''); // removes spaces

  beforeEach(module('ShoppingListDirectiveApp'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  beforeEach(inject(function($templateCache) {
    var directiveTemplate = null;
    var req = new XMLHttpRequest();
    req.onload = function() {
        directiveTemplate = this.responseText; // html sayfası alınır
    };

    // Note that the relative path may be different from your unit test HTML file.
    // Using `false` as the third parameter to open() makes the operation synchronous.
    req.open("get", "shoppinList.html", false);
    req.send();
    $templateCache.put("shoppinList.html", directiveTemplate);  // burda ilgili html  c
  }));

  it('Replaces the element with the appropriate content', function() {

    var a = {};
    a.items = [
      {name: "item 1", quantity: "1"},
      {name: "item 2", quantity: "2"}
    ];
    $rootScope.list = a;

    // Compile a piece of HTML containing the directive
    var html = "<shopping-list my-list='list' title='test title'></shopping-list>"
    var element = $compile(html)($rootScope); // rootScope üzerinden html değişkenine bakarak compile eder

    // fire all the watches, so the scope expressions will be evaluated
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(element.html().replace(/\s/g, '')).toContain(expectedHtml);
  });
});
