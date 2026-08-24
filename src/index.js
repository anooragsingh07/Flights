const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());//Lets Express read JSON data from requests; without it, req.body won't contain your JSON data.
app.use(express.urlencoded({extended: true}));//Lets Express read form data; without it, URL-encoded form requests won't be parsed.

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
