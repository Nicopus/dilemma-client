'use strict';

describe('Controller: SvarDilemmaCtrl', function () {

  // load the controller's module
  beforeEach(module('dilemmaApp'));

  var SvarDilemmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SvarDilemmaCtrl = $controller('SvarDilemmaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SvarDilemmaCtrl.awesomeThings.length).toBe(3);
  });
});
