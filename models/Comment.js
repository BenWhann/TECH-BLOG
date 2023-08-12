const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // parent_comment_id: {
    //   type: DataTypes.INTEGER, 
    //   references: {
    //     model: 'comment',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
  }
);

module.exports = Comment;