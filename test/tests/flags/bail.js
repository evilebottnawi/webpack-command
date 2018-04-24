const ModuleNotFoundError = require('webpack/lib/ModuleNotFoundError');

const { apply, build, validate } = require('../../util');

const fixture = 'bail/bail';
const opts = { fixture };

let config;

describe('--bail', () => {
  it(`should validate`, () => {
    expect(validate(opts)).toEqual(true);
  });

  it(`should apply`, () => {
    config = apply(opts);

    expect(config).toMatchSnapshot();
  });

  it(`should build, fail, and bail`, () =>
    build(config).catch((error) => {
      expect(error).toEqual(expect.any(ModuleNotFoundError));
    }));
});