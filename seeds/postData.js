const { Post } = require('../models');

const postData = [
    {
      title: "Post 1",
      body: "Post 1 body",
      user_id: 1
    },
    {
      title: "Post 2",
      body: "Post 2 body",
      user_id: 1
    },
    {
      title: "Post 3",
      body: "Post 3 body",
      user_id: 1
    }
  ];

  const seedPost = () => Post.bulkCreate(postData);

  module.exports = seedPost;
  