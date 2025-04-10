import axios from 'axios';

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
 * @typedef {Object} TagResponse
 * @param {number} id
 * @param {string} key
 * @param {string} value 
 */

/**
 * @typedef {Object} ItemResponse
 * @param {number} id
 * @param {ImageResponse} image 
 * @param {string} title
 * @param {string} description
 * @param {number} price
 * @param {number} count
 * @param {TagResponse[]} tags
 */

/**
 * @typedef {Object} SearchItemsParams
 * @param {string} [collection] 
 * @param {string} [keyword]
 * @param {string} [min_price]
 * @param {string} [max_price]
 * @param {string} [color]
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
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    })
};

/**
 * @param {SearchItemsParams} queryParams 
 * @returns {Promise<AxiosResponse<{response: {items: ItemResponse[]}}, any>>}
 * @throws {AxiosError<Object>}
 */
export const searchItems = (queryParams = {}) => axios.get(
    '/api/items/search', 
    { 
        params: queryParams, 
    }
);
