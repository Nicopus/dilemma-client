'use strict';

describe('Controller: OmDilemmaCtrl', function () {

  // load the controller's module
  beforeEach(module('dilemmaApp'));

  var OmDilemmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OmDilemmaCtrl = $controller('OmDilemmaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OmDilemmaCtrl.awesomeThings.length).toBe(3);
  });
});
