import commits from '../commits';
import expect from 'expect';

describe('commits reducer', () => {
  it('Should return the initial state', () => {
    expect(commits(undefined, {})).toEqual({
      commits: []
    });
  });
});