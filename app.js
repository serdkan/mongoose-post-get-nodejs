const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const postsRoutes = require('./routes/posts')
const postsStok = require('./routes/StokGetPost')

app.use(bodyParser.json());


app.use('/get',postsRoutes);
app.use('/Stok',postsStok);
//app.use('/user',userRoute);
app.get('/',(req,res)=>{

res.send("hello world");

});


mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true ,useUnifiedTopology: true,  useCreateIndex: true },
()=>console.log('connect to DB')
);

app.listen(3000);
