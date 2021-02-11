const express = require("express")
const router = express.Router()
const controller=require('./controller');


router.post('/links',controller.createShortUrlHandler);

router.get('/:urlHash', controller.redirectHandler);

module.exports = router;