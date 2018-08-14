const express = require('express');
const bodyParser = require('body-parser');

const User = require('./src/user');
const Post = require('./src/post');
const Like = require('./src/like');

const user = new User();
const post = new Post();
const like = new Like();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

// 建立User
app.post('/user', async (req, res) => {
    const result = await user.create(req.body);
    console.log(result.dataValues);
    res.send('success');
});

// 發表Post
app.post('/post', async (req, res) => {
    const result = await post.create(req.body);
    console.log(result.dataValues);
    res.send('success');
});

// 對Post按like
app.post('/like', async (req, res) => {
    const result = await like.create(req.body);
    console.log(result.dataValues);
    res.send('success');
});

// 列出User的所有Posts
app.get('/userPost', async (req, res) => {
    if (req.query.uid === undefined) {
        throw console.error();
    } else {
        const result = await post.findAll(req.query);
        res.send(result);
    }
});

// 列出Post的所有Likes
app.get('/postLikes', async (req, res) => {
    if (req.query.pid === undefined) {
        throw console.error();
    } else {
        const result = await like.findAll(req.query);
        res.send(result);
    }
});

app.listen(3000);
