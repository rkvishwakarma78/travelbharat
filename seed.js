/**
 * TRAVELBHARAT - AUTOMATED DATABASE SEEDER (backend/seed.js)
 * Imports verified States, Cities, and Destinations into MongoDB in one click.
 * Usage: node seed.js  OR  npm run seed
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const State = require('./models/State');
const City = require('./models/City');
const Destination = require('./models/Destination');

const loadDataFile = (relativePath) => {
  const fullPath = path.join(__dirname, '..', relativePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  let result;
  eval(fileContent.replace('const ', 'result = '));
  return result;
};

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travelbharat';
    console.log(`⏳ Connecting to MongoDB at: ${mongoUri}...`);
    
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected for Seeding.');

    console.log('📂 Reading datasets from /data directory...');
    const statesData = loadDataFile('data/states.js');
    const citiesData = loadDataFile('data/cities.js');
    const destinationsData = loadDataFile('data/destinations.js');

    console.log(`Found: ${statesData.length} States/UTs, ${citiesData.length} Cities, ${destinationsData.length} Destinations.`);

    console.log('🧹 Clearing existing collections...');
    await State.deleteMany();
    await City.deleteMany();
    await Destination.deleteMany();
    console.log('✅ Previous collections cleared.');

    console.log(`📥 Inserting ${statesData.length} States & UTs into MongoDB...`);
    await State.insertMany(statesData);

    console.log(`📥 Inserting ${citiesData.length} Cities into MongoDB...`);
    await City.insertMany(citiesData);

    console.log(`📥 Inserting ${destinationsData.length} Tourist Destinations into MongoDB...`);
    await Destination.insertMany(destinationsData);

    console.log('\n======================================================');
    console.log('🎉 [DATABASE SEEDING SUCCESSFUL] 🎉');
    console.log(`✅ States & UTs Seeded   : ${statesData.length}`);
    console.log(`✅ Cities & Towns Seeded : ${citiesData.length}`);
    console.log(`✅ Attractions Seeded    : ${destinationsData.length}`);
    console.log('======================================================\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed with error:', error);
    process.exit(1);
  }
};

seedDatabase();