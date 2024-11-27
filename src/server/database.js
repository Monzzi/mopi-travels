const http = require('http');
const fs = require('fs');
const path = require('path');

// Path to the JSON database file
const DB_PATH = path.join(__dirname, 'data.json');

// Read JSON database
function readDatabase() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { transportOptions: [] };
  }
}

// Write to JSON database
function writeDatabase(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to database:', error);
  }
}

module.exports = { readDatabase, writeDatabase };
