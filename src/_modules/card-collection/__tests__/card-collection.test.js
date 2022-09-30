'use strict';

import CardCollection from '../card-collection';

describe('CardCollection View', function() {

  beforeEach(() => {
    this.cardCollection = new CardCollection();
  });

  it('Should run a few assertions', () => {
    expect(this.cardCollection);
  });

});
