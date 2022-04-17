import axios from 'axios';

export const getApiCall = (url,action) => {
    return dispatch => {
        axios.get(url).then(response => dispatch(action(response.data)))
            .catch(error => dispatch(action(error)))
    }
}
