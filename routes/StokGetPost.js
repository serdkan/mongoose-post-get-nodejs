const express = require('express');
const router = express.Router();
const Post = require('../models/StokMon');
require('dotenv/config');


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:StokAdi', async (req, res) => {
    try {
        const posts = await Post.find(StokAdi);
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {

    const post = new Post({
      StokKodu: req.body.StokKodu,
      StokAdi: req.body.StokAdi,
      Birim: req.body.Birim,
      GrupKodu:req.body.GrupKodu
      });
      try {
       const savedPost = await post.save();
         res.json(savedPost);
     } catch (err) {
    res.json({ message: err.code===11000?`${err.keyValue} daha önce kayıt olmuş`:err.message })
    }
});

module.exports = router;