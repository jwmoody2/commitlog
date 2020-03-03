import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { CommitList } from '../CommitList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CommitList Component', () => {
  test('renders', () => {
    const wrapper = shallow(<CommitList />);

    expect(wrapper.exists()).toBe(true);
  })
});