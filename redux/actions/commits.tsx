import axios from 'axios';

export const commitsReceived = commits => ({
  commits,
  type: 'RECEIVE_COMMITS'
});

export const commitsReceivedError = error => ({
  error,
  type: 'RECEIVE_COMMITS_ERROR'
});

export function fetchCommits() {
  return (dispatch) => {
    return axios.get('https://api.github.com/repos/jwmoody2/commitlog/commits', {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        dispatch(commitsReceived(response.data));
      })
      .catch(error => {
        dispatch(commitsReceivedError(error));
      });
  }
}