const reroutes = require('./reroutes.json');

describe('reroutes.json: array of objects for reroute pages.\n  {route: string, src: string, location: string}', () => {
  test.each(reroutes)(`Route "$route" has correct properties.`, route => {
    expect(route).toMatchObject({
      route: expect.any(String),
      src: expect.any(String),
      location: expect.any(String)
    });
  });
});
