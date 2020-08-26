import Config from 'react-native-config';
import axios from 'axios';

const request = async (url, requestType, data = {}) => {
    let request = await axios({
        baseURL: Config.HOST_URL,
        url: url,
        method: requestType,
        data: data,
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });

    return request;
};

export default request;
