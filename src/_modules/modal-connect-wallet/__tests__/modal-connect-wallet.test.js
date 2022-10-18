'use strict';

import ModalConnectWallet from '../modal-connect-wallet';

describe('ModalConnectWallet View', function() {

  beforeEach(() => {
    this.modalConnectWallet = new ModalConnectWallet();
  });

  it('Should run a few assertions', () => {
    expect(this.modalConnectWallet);
  });

});
