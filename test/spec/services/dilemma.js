'use strict';

describe('Service: dilemma', function () {

  // load the service's module
  beforeEach(module('dilemmaApp'));

  // instantiate service
  var dilemma;
  beforeEach(inject(function (_dilemma_) {
    dilemma = _dilemma_;
  }));

  it('should do something', function () {
    expect(!!dilemma).toBe(true);
  });

});
