import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { CommitList } from '../CommitList';
import { mapStateToProps } from '../COmmitList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CommitList Component', () => {
  test('renders', () => {
    const wrapper = shallow(<CommitList />);

    expect(wrapper.exists()).toBe(true);
  })

  it('Values sent in as props should be mapped correctly', () => {
    const initialState = {
      commits: []
    };

    expect(mapStateToProps(initialState).commits).toEqual([]);
  });
});