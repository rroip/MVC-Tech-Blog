const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "SET NULL"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { Post, Comment, User };