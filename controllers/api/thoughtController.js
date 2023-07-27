const Thought = require("../../models/Thought");
const User = require("../../models/User");
const Reaction = require("../../models/Reaction");

const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const thought = await Thought.create({ thoughtText, username });
    user.thoughts.push(thought._id);
    await user.save();

    res.status(201).json(thought);
  } catch (error) {
    console.error("Error creating thought:", error);
    res.status(500).json({ error: "Failed to create thought" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate(
      "reactions"
    );
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (error) {
    console.error("Error getting thought by ID:", error);
    res.status(500).json({ error: "Failed to get thought" });
  }
};

const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (error) {
    console.error("Error updating thought:", error);
    res.status(500).json({ error: "Failed to update thought" });
  }
};

const deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
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
    console.error("Error getting all thoughts:", error);
    res.status(500).json({ error: "Failed to get thoughts" });
  }
};

module.exports = {
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  getAllThoughts,
};
