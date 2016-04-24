'use strict';

describe('Controller: MeCtrl', function () {

  // load the controller's module
  beforeEach(module('dilemmaApp'));

  var MeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeCtrl = $controller('MeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MeCtrl.awesomeThings.length).toBe(3);
  });
});
