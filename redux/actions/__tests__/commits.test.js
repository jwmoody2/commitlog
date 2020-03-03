import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../commits';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('Creates RECEIVE_COMMITS when retrieving list of commits', () => {
  const expectedActions = [{type: 'RECEIVE_COMMITS' }];

  const store = mockStore();

  store.dispatch(actions.commitsReceived());
  expect(store.getAction()).toEqual(expectedActions);
});