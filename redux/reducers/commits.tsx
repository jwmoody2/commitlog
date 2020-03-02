const commits = (
  state = {
    commits: []
  },
  action
) => {
  switch (action.type) {
  case 'RECEIVE_COMMITS':
    return Object.assign({}, state, {
      commits: action.commits
    });
  default:
    return state;
  }
};

export default commits;