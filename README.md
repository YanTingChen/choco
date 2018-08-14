# Readme

## Import SQL

匯入資料庫 choco.sql

## Install

```shell
    npm i
```

## Run the server

```shell
    npm start
```

## Run the test

```shell
    npm test
    node .\test\like_user.js
    node .\test\user_post.js
```

## Router

### 建立User (POST)

    127.0.0.1:3000/user

### 發表Post (POST)

    127.0.0.1:3000/post

### 對Post按like (POST)

    127.0.0.1:3000/like

### 列出User的所有Posts (GET)

    127.0.0.1:3000/userPost

### 列出Post的所有Likes (GET)

    127.0.0.1:3000/postLikes
