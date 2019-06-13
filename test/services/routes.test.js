const app = require('../../src/app');

describe('\'routes\' service', () => {
  it('registered the service', () => {
    const service = app.service('routes');
    expect(service).toBeTruthy();
  });
});
