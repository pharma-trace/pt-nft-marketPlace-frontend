'use strict';

import ModalProperties from '../modal-properties';

describe('ModalProperties View', function() {

  beforeEach(() => {
    this.modalProperties = new ModalProperties();
  });

  it('Should run a few assertions', () => {
    expect(this.modalProperties);
  });

});
