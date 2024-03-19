const express = require("express");
const authRouter  = require("./auth.route");
const carsRouter = require("./cars.route");

const router = express.Router();

const defaultRoutes = [
    { path: '/auth', route: authRouter },
    { path: '/cars', route: carsRouter }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
