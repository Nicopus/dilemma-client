'use strict';

describe('Controller: ViewdilemmaCtrl', function () {

  // load the controller's module
  beforeEach(module('dilemmaApp'));

  var ViewdilemmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewdilemmaCtrl = $controller('ViewdilemmaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewdilemmaCtrl.awesomeThings.length).toBe(3);
  });
});
