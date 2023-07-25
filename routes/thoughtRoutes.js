const express = require('express');
const router = express.Router();
const { createThought, getThoughtById, updateThought, deleteThought, getAllThoughts } = require('../controllers/thoughtController');

router.get('/thoughts', getAllThoughts);
router.get('/thoughts/:thoughtId', getThoughtById);
router.post('/thoughts', createThought);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);

module.exports = router;
