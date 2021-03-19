const express = require('express');
const cors = require('cors');
const routes = require('../Routes/routes');
const mongoose = require('mongoose');
require('dotenv-safe').config();

const config = {
    url:'mongodb+srv://'+process.env.user+':'+process.env.pass+'@cluster-test.q4jsk.gcp.mongodb.net/'+process.env.database+'?retryWrites=true&w=majority'
}

mongoose.connect(config.url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);