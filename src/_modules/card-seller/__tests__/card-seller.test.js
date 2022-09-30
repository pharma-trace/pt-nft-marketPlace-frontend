'use strict';

import CardSeller from '../card-seller';

describe('CardSeller View', function() {

  beforeEach(() => {
    this.cardSeller = new CardSeller();
  });

  it('Should run a few assertions', () => {
    expect(this.cardSeller);
  });

});
