const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database bağlantısı sağlandı') },
  err => { console.log('database bağlanırken hata oluştu'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('dinlenen port ' + port);
});