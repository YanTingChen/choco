const request = require('request');

const options = {
    method: 'POST',
    url: 'http://localhost:3000/user',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: { uid: '5278', account: 'tom', password: '123456' },
};

const options2 = {
    method: 'POST',
    url: 'http://localhost:3000/post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    form:
   {
       pid: '6666',
       uid: '5278',
       title: '男子籃球：中華 vs. 日本',
       context: '2018 雅加達巨港亞運',
       img: '01.jpg',
   },
};

const options3 = {
    method: 'POST',
    url: 'http://localhost:3000/like',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
        lid: '7777', uid: '5278', pid: '6666', likes: '1',
    },
};

request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
});
request(options2, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
});
request(options3, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
});
