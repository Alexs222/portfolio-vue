const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home-page');
const ctrlBlog = require('../controllers/blog');
const ctrlAdmin = require('../controllers/admin');

router.get('/', ctrlHome.index);
router.get('/blog', ctrlBlog.blog);
router.get('/admin', ctrlAdmin.admin);

module.exports = router;
