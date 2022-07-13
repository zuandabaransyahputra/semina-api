const express = require('express');
const router = express();
const { create, index, find, update, destroy, updateStatusEvent } = require('./controller');

router.get('/events', index);
router.get('/events/:id', find);
router.put('/events/:id', update);
router.delete('/events/:id', destroy);
router.post('/events', create);
router.put('/events/:id/status', updateStatusEvent)

module.exports = router;