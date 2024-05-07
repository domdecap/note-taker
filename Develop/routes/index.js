const router = require('express').Router();

const notesRouter = require('./routes');

router.use('./routes.js', notesRouter);

module.exports = router;