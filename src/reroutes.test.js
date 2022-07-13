const reroutes = require('./reroutes.json');

test('json', () => {
  console.log(reroutes);
  for (i in reroutes) {
    const route = reroutes[i];
    expect(route).toMatchObject({
      route: expect.any(String),
      src: expect.any(String),
      location: expect.any(String)
    });
  }
});
