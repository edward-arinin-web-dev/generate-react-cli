const { generateReducer } = require('./reducerActions');

describe('reducerActions', () => {
  it('generateReducer should be defined.', () => {
    expect(generateReducer).toBeDefined();
  });
});
