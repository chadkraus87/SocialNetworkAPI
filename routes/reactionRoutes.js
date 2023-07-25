const express = require('express');
const router = express.Router();
const { createReaction, deleteReaction } = require('../controllers/api/reactionController');

router.post('/thoughts/:thoughtId/reactions', createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
