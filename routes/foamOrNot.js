const express = require('express');
const router = express.Router();
const foamController = require('../controllers/foamButton');

router.post('/foam/:id/foamOrNot', foamController.yesFoam);
router.delete('/foamOrNot/:id/', foamController.noFoam);

module.exports = router;