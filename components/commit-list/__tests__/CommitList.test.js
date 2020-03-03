import React from 'react';
import { CommitList } from '../CommitList';
import { mapStateToProps } from '../CommitList';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

const mockCommitsData = [
  { sha: '1234', commit: { message: 'First Commit', author: { name: 'Joe Moody' }}},
  { sha: '5678', commit: { message: 'Second Commit', author: { name: 'Joe Moody' }}},
  { sha: 'abcd', commit: { message: 'Third Commit', author: { name: 'Joe Moody' }}}
];

describe('CommitList Component', () => {
  test('renders', () => {
    renderer.create(<CommitList fetchCommits={jest.fn()} />);
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
      fetchCommits: jest.fn(),
      commits: mockCommitsData
    };

    const wrapper = renderer.create(<CommitList {...baseProps}/>);
    const testInstance = wrapper.root;

    expect(testInstance.findAllByType(Text).length).toEqual(9);
  });

  it('Display message if no commits are available', () => {
    const baseProps = {
      commits: [],
      fetchCommits: jest.fn()
    };

    const wrapper = renderer.create(<CommitList {...baseProps}/>);
    const testInstance = wrapper.root;

    expect(testInstance.findByType(Text).props.children).toEqual('No Commits Available');
  });

  it('Make axios call to fetch commits on mount', () => {
    const baseProps = {
      commits: [],
      fetchCommits: jest.fn()
    };

    const wrapper = renderer.create(<CommitList {...baseProps}/>);

    expect(baseProps.fetchCommits).toHaveBeenCalled();
  });

  it('Name, SHA, and message is displayed for a commit', () => {
    const baseProps = {
      commits: mockCommitsData,
      fetchCommits: jest.fn()
    };

    const wrapper = renderer.create(<CommitList {...baseProps}/>);
    const testInstance = wrapper.root;

    expect(testInstance.findAllByType(Text).length).toEqual(9);
  });
});