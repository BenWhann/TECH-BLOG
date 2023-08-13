const { Comment } = require("../models");

const commentData = [
  {
    comment: "Comment 1",
    post_id: 1,
    user_id: 2,
  },
  {
    comment: "Comment 2",
    post_id: 2,
    user_id: 1,
  },
  {
    comment: "Comment 3",
    post_id: 1,
    user_id: 3,
  },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;