import axios from 'axios';

export const commitsReceived = commits => ({
  commits,
  type: 'RECEIVE_COMMITS'
});

export function fetchCommits() {
  return (dispatch) => {
    return axios.get('https://api.github.com/repos/jwmoody2/commitlog/commits', {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        dispatch(commitsReceived(response.data));
      });
  }
}