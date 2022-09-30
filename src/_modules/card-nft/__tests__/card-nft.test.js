'use strict';

import CardNft from '../card-nft';

describe('CardNft View', function() {

  beforeEach(() => {
    this.cardNft = new CardNft();
  });

  it('Should run a few assertions', () => {
    expect(this.cardNft);
  });

});
