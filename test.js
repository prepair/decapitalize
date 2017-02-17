const assert = require('assert');
const decapitalize = require('./');

function describe (s, cb) {
  console.log(`describe ${s}`);
  cb();
  console.log();
}

function it (s, cb) {
  console.log(`* it ${s}`);
  cb();
}

describe('decapitalize', () => {
  it('should decapitalize a string', () => {
    assert.equal(decapitalize('FooBarBaz'), 'fooBarBaz');
  });

  it('should not change case', () => {
    assert.equal(decapitalize('fooBar'), 'fooBar');
  });

  it('should not handle errors for you', () => {
    let err;
    try {
      decapitalize(42);
    } catch (e) {
      err = e;
    }
    assert.ok(err instanceof TypeError);
  });

  it('should not deal specifically with locale accented characters, though they may work', () => {
    assert.equal(decapitalize('ÉderMester'), 'éderMester');
  });
});
