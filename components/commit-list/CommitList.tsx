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

    if (commits && 0 < commits.length) {
      return (<FlatList data={commits} renderItem={this.renderCommits} />)
    } else {
      return (<Text>No Commits Available</Text>)
    }
  }
}

export const mapStateToProps = state => {
  return {
    commits: state.commits.commits
  };
};

export default connect(mapStateToProps)(CommitList);