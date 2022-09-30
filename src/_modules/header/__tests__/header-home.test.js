'use strict';

import Header from '../header';

describe('Header View', function() {

  beforeEach(() => {
    this.headerHome = new Header();
  });

  it('Should run a few assertions', () => {
    expect(this.headerHome);
  });

});
