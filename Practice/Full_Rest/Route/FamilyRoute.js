var express = require('express');
var controller = require('../Controller/famController');

var router = express.Router();

router.get('/allMembers', controller.showAll);
router.get('/specificAge', controller.specificAge);
router.patch('/updateInfo', controller.updateById);
router.post('/newMember', controller.createNew);


module.exports = router;