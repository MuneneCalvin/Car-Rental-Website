const express = require("express");
const userRouter = require("./users.route");
const locationRouter = require("./location.route");
const carsRouter = require("./cars.route");
const bookingRouter = require("./booking.route");

const router = express.Router();

const defaultRoutes = [
    { path: '/users', route: userRouter },
    { path: '/locations', route: locationRouter },
    { path: '/cars', route: carsRouter },
    { path: '/bookings', route: bookingRouter },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;