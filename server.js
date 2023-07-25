const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Load routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/thoughtRoutes'));
app.use('/api', require('./routes/reactionRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
