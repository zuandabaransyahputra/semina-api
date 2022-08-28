const mongoose = require('mongoose');
const { urlDb } = require('../config');

// mongoose.connect(urlDb);

// const db = mongoose.connection;

const db = async () => {
  try {
    const conn = await mongoose.connect(urlDb, {
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = db;