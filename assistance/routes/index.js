var express = require('express');
var router = express.Router();

router.get('/holi', function(req, res, next) {
  res.send('hola puñal')
})

module.exports = router;
