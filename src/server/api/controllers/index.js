
const axios = require('axios');
const { GeneralError, GeneralResponse } = require('../helper/Response');


exports.getPosts = async (req, res, next) => {
    try {
        let response = {};
        const postsList = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
        response = postsList.data;
        return next(new GeneralResponse('Posts List', response));;
    } catch (error) {
        if (error.response && error.response.status === 404) return next(new GeneralError('Requested Url not found', undefined, 404));
        if (error.response && error.response.status === 500) return next(new GeneralError('Service down'));
        if (error.response && error.response.status >= 400) return next(new GeneralError('Problem with request'));
        return (new GeneralError("error in fetching posts list"));
    }
}