const Thought = require('../models/Thought');

const createReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    const { reactionBody, username } = req.body;
    thought.reactions.push({ reactionBody, username });
    await thought.save();
    res.status(201).json(thought);
  } catch (error) {
    console.error('Error creating reaction:', error);
    res.status(500).json({ error: 'Failed to create reaction' });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    thought.reactions = thought.reactions.filter(
      (reaction) => reaction.reactionId.toString() !== req.params.reactionId
    );
    await thought.save();
    res.json({ message: 'Reaction deleted successfully' });
  } catch (error) {
    console.error('Error deleting reaction:', error);
    res.status(500).json({ error: 'Failed to delete reaction' });
  }
};

module.exports = {
  createReaction,
  deleteReaction,
};
