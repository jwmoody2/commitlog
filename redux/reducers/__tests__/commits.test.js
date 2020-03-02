import commits from '../commits';
import expect from 'expect';

describe('commits reducer', () => {
  it('Should return the initial state', () => {
    expect(commits(undefined, {})).toEqual({
      commits: []
    });
  });

  it('Should handle RECIEVE_COMMITS and set commit data properly', () => {
    const startAction = {
      commits: ['test', 'test1', 'test2'],
      type: 'RECEIVE_COMMITS'
    }
    expect(commits(undefined, {})).toEqual({
      commits: ['test', 'test1', 'test2']
    });
  });
});