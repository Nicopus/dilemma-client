'use strict';

describe('Directive: htmlData', function () {

  // load the directive's module
  beforeEach(module('dilemmaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<html-data></html-data>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the htmlData directive');
  }));
});
