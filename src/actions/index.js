import axios from 'axios';

export const username = () => {
    return async (dispatch) => {
        try {
            let usersRepos = await axios.get(`https://api.github.com/users/${username}/repos`)
            dispatch({
                type: 'LOAD_REPOS',
                payload: usersRepos
            })
        } catch(err) {

        }
    }
}