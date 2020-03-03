import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export class CommitList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Text>CommitList!</Text>
    );
  }
}

export const mapStateToProps = state => {
  return {
    commits: state.commits.commits
  };
};

export default connect(mapStateToProps)(CommitList);