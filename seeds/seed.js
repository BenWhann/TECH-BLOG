const sequelize = require('../config/connections');
const { User, Post, Comment } = require('../models');

const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedComment();

  process.exit(0);
};

seedDatabase();