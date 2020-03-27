const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    MenuAdi: {
        type:String,
        required:true,
        index: true,
        unique: true
    },
    Sira:{
        type:Int,
        required:true
    },
    Aktif:{
        type:Boolean,
        required:true
    },
    Sub:{
        type:Boolean
    }
    ,
    ParentMenu:{
        type:Boolean
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('menu',PostSchema)