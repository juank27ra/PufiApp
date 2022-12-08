import axios from 'axios'

export const postForm = (data) => {
    return async (dispatch) => {
        try {
            await axios({
            method: 'POST',
            url: `https://formspree.io/f/xnqrebvj`,
            data
        })
        } catch (error) {
            console.log(error)
        }
    }
}