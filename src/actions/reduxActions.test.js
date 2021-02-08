const { generateRedux } = require('./reduxActions');

describe('reduxActions', () => {
  it('generateRedux should be defined.', () => {
    expect(generateRedux).toBeDefined();
  });
});
