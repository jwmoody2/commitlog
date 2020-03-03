import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { CommitList } from '../CommitList';
import { mapStateToProps } from '../CommitList';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

describe('CommitList Component', () => {
  test('renders', () => {
    renderer.create(<CommitList />);
  })

  it('Values sent in as props should be mapped correctly', () => {
    const initialState = {
      commits: {
        commits: []
      }
    };

    expect(mapStateToProps(initialState).commits).toEqual([]);
  });

  it('Display multiple commits', () => {
    const baseProps = {
      commits: ['test1', 'test2', 'test3']
    };

    const wrapper = renderer.create(<CommitList {...baseProps}/>);
    const testInstance = wrapper.root;

    expect(testInstance.findAllByType(Text).length).toEqual(3);
  });
});