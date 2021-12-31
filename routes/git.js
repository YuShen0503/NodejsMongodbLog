

const express = require('express');
const router = express.Router();

/* GET git page. */
router.get('/git', function(req, res, next) {
    res.render('git', { title: 'git页', name: 'git页'});
});

module.exports = router;