'use strict';

import HeaderLogged from '../header-logged';

describe('HeaderLogged View', function() {

  beforeEach(() => {
    this.headerLogged = new HeaderLogged();
  });

  it('Should run a few assertions', () => {
    expect(this.headerLogged);
  });

});
