const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    StokKodu: {
        type:String,
        required:true,
        index: true,
        unique: true
    },
    StokAdi:{
        type:String,
        required:true
    },
    Birim:{
        type:String,
        required:true
    },
    GrupKodu:{
        type:String
    }
    ,
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('stok',PostSchema)