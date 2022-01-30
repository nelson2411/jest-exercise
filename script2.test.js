const fetch = require("node-fetch");
const swapi = require("./script2");

// We need to assign Done as a parameter to determine whether the finished
it("calls swapi to get people", (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    // Here we determine what data expects when fetching
    expect(data.count).toEqual(82);
    // Here we determine when the process is done
    done();
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  // Testing promises fetching
  return swapi.getPeoplePromise(fetch).then((data) => {
    // Here we determine what data expects when fetching
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
