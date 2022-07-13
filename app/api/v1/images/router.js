const express = require('express');
const router = express();
const { create, getAll } = require('./controller');
const upload = require('../../../middlewares/multer');

router.post('/', upload.single('avatar'), create);
router.get('/', getAll)
module.exports = router;