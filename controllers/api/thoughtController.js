const Thought = require('../models/Thought');
const User = require('../models/User');

const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const thought = await Thought.create({ thoughtText, username });

    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.thoughts.push(thought._id);
    await user.save();

    res.status(201).json(thought);
  } catch (error) {
    console.error('Error creating thought:', error);
    res.status(500).json({ error: 'Failed to create thought' });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate('reactions');
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    console.error('Error getting thought by ID:', error);
    res.status(500).json({ error: 'Failed to get thought' });
  }
};

const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    console.error('Error updating thought:', error);
    res.status(500).json({ error: 'Failed to update thought' });
  }
};

const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    const user = await User.findById(thought.userId);
    user.thoughts = user.thoughts.filter((thoughtId) => thoughtId.toString() !== req.params.thoughtId);
    await user.save();

    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    console.error('Error deleting thought:', error);
    res.status(500).json({ error: 'Failed to delete thought' });
  }
};

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    console.error('Error getting all thoughts:', error);
    res.status(500).json({ error: 'Failed to get thoughts' });
  }
};

module.exports = {
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  getAllThoughts,
};
