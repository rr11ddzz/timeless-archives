const mongoose = require('mongoose');

async function connectToMongo() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured. Add it to backend/.env before starting the API.');
  }

  await mongoose.connect(uri);
}

module.exports = connectToMongo;
