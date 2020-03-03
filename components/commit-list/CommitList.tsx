import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchCommits } from '../../redux/actions/commits';

interface AppProps {
  commits?: string[];
  fetchCommits?: Function;
}

export class CommitList extends Component<AppProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCommits();
  }
  
  renderCommits = ({ item }) => (
    <View key={item.sha} style={styles.item}>
      <Text>{item.commit.author.name}</Text>
      <Text>{item.sha}</Text>
      <Text>{item.commit.message}</Text>
    </View>
  );

  render() {
    const { commits } = this.props;

    if (commits && 0 < commits.length) {
      return (<FlatList style={styles.container} data={commits} renderItem={this.renderCommits} />)
    } else {
      return (<Text>No Commits Available</Text>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 12,
    borderBottomWidth: 1
  }
})

export const mapStateToProps = state => {
  return {
    commits: state.commits.commits
  };
};

export const mapDispatchToProps = {
  fetchCommits
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitList);