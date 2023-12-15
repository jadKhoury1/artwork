import axios from "axios";

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 * @typedef {import('axios').AxiosError} AxiosError
 */

/**
 * @typedef {Object} ImageResponse
 * @property {number} id
 * @property {string} original 
 */


/**
 * @param {File} image 
 * @returns {Promise<AxiosResponse<{response: ImageResponse}, any>>}
 * @throws {AxiosError<Object>}
 */
export const uploadImage = image => {
    const formData = new FormData()
    formData.append('image', image);
    return axios.post('/api/image/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};
