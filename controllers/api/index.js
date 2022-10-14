// Dependencies

const router = require('express').Router(); // Server connection
const userRoutes = require('./user-routes'); // User Routes
const postRoutes = require('./post-routes'); // Post Routes
const commentRoutes = require('./comment-routes'); // Comment Routes

// Defines route path for the API to use, e.g. api/users/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;