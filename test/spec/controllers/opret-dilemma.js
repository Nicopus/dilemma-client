'use strict';

describe('Controller: OpretDilemmaCtrl', function () {

  // load the controller's module
  beforeEach(module('dilemmaApp'));

  var OpretDilemmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpretDilemmaCtrl = $controller('OpretDilemmaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpretDilemmaCtrl.awesomeThings.length).toBe(3);
  });
});
