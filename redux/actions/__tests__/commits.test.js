import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../commits';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Commit actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall
  })

  it('Creates RECEIVE_COMMITS when commits data returns on call', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{commit: 'test1'}, {commit: 'test2'}]
      })
    });

    const expectedActions = [
      { commits: [{commit: 'test1'}, {commit: 'test2'}], type: 'RECEIVE_COMMITS' }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchCommits()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('Creates RECEIVE_COMMITS_ERROR when fetching commits fails', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: { status: 500, data: { error: { description: 'There was an error'}}}
      })
    });

    const expectedActions = [
      { error: {
        response: { status: 500, data: { error: { description: 'There was an error'}}},
        status: 500
      },
        type: 'RECEIVE_COMMITS_ERROR'
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchCommits()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('Creates RECEIVE_COMMITS when calling commitsReceived action', () => {
    const expectedActions = [{type: 'RECEIVE_COMMITS' }];

    const store = mockStore();

    store.dispatch(actions.commitsReceived());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates RECEIVE_COMMITS_ERROR when calling commitsReceivedError action', () => {
    const expectedActions = [{type: 'RECEIVE_COMMITS_ERROR' }];

    const store = mockStore();

    store.dispatch(actions.commitsReceivedError());
    expect(store.getActions()).toEqual(expectedActions);
  });
});