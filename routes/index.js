
const express = require('express');
const router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '首页', name: '博客'});
});

module.exports = router;