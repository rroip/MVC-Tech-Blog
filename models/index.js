const User = require("./used");
const Post = require("./posted");
const Comment = require("./com");

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