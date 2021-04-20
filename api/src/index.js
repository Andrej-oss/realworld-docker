const express = require('express');
const {connectDb} = require('./helpers/db');
const axios = require('axios');
const { host, port, db, authUserUrl } = require('./config/index');
const mongoose = require('mongoose');

const app = express();
const postSchema = new mongoose.Schema({name: String});
const Post = mongoose.model("Post", postSchema);
console.log(port, host);
app.get('/test', (req, res) => {
    res.send("Api service is !!!!")
});
app.get('/testWithAuth', (req, res) => {
    axios.get(authUserUrl + "/currentUser")
        .then(response => res.json({
            testWithAuth: authUserUrl,
            currentUser: response.data
        }));
});
app.get("/api/testapi", (req, resp) => {
    return resp.send({
        testapi: true
    })
});
let find = Post.find(((err, posts) => {
    if (err) return console.log(err);
    console.log(posts);
}));
const silent = new Post({name: "silentname"});
let save = silent.save(((err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
}));
const startServer = () => {
    app.listen(port, () => {
        Post.find(((err, posts) => {
        if (err) return console.log(err);
        console.log(posts);
    }));
        console.log(find);
        silent.save(((err, doc) => {
            if (err) return console.log(err);
            console.log(doc);
        }));
        console.log(`Server started on port: ${port}`);
        console.log(`mongo db: ${db}`);
        console.log(silent.name);
        console.log(`on host: ${host}`);
        console.log("HUYyyyyyyy");
    });
};
connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
