// Dependencies

const router = require('express').Router(); // Server connection
const userRoutes = require('./User-routes'); // User Routes
const postRoutes = require('./Post-routes'); // Post Routes
const commentRoutes = require('./Comment-routes'); // Comment Routes

// Defines route path for the API to use, e.g. api/users/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;