const axios =  require("axios");
const express = require('express');
const {connectDb} = require('./helpers/db');
const { host, port, db, apiUrl } = require('./config/index');

const app = express();

console.log(port, host);
app.get('/test', (req, res) => {
    res.send("Api auth service is working!!!!")
});
app.get("/api/currentUser", (req, res) => {
   res.json({
       id: 123,
       name: "Joh",
       email: "joh@gmail.com"
       })
});
app.get("/testwithapi", (req, resp) => {
    axios.get(apiUrl + "/testapi")
        .then(response => {
            resp.json({
                tesWithApi: response.data
            });
        })
});
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server auth started on port: ${port}`);
        console.log(`mongo db: ${db}`);
        console.log(`on host: ${host}`);
        console.log("HUYyyyyyyy");
    });
};
connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
