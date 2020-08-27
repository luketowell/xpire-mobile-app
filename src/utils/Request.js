import Config from 'react-native-config';
import axios from 'axios';

const request = async (url, requestType, data = {}) => {
    let appRequest = await axios({
        baseURL: Config.HOST_URL,
        url: url,
        method: requestType,
        data: null,
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });

    return appRequest;
};

export default request;
