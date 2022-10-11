// Dependencies
const router = require("express").Router(); // server connection
const apiRoutes = require("./api"); // API folder route
const homeRoutes = require("./home-routes"); // Home page route
const dashboardRoutes = require("./dashboard-routes"); // Dashboard route

router.use("/api", apiRoutes); // path to API routes
router.use("/", homeRoutes); // path to the home page
router.use("/dashboard", dashboardRoutes); // path to the dashboard

// Define a catch-all route 404
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
