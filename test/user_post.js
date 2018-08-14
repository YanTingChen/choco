const request = require('request');

const options = {
    method: 'GET',
    url: 'http://localhost:3000/userPost',
    qs: { uid: '5278' },
};

request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
});
