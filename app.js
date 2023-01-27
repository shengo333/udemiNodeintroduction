const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    console.log(__dirname, 'this is dirname i guess')
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);


//