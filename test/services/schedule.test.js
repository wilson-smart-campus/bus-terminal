const app = require('../../src/app');

describe('\'schedule\' service', () => {
  it('registered the service', () => {
    const service = app.service('schedule');
    expect(service).toBeTruthy();
  });
});
