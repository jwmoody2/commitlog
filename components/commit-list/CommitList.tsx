import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

interface AppProps {
  commits?: string[];
}

export class CommitList extends Component<AppProps> {
  constructor(props) {
    super(props);
  }
  
  renderCommits = ({ item }) => (
    <Text key={item}>{item}</Text>
  );

  render() {
    const { commits } = this.props;

    return (
      <FlatList
        data={commits}
        renderItem={this.renderCommits}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    commits: state.commits.commits
  };
};

export default connect(mapStateToProps)(CommitList);