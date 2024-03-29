const express = require("express");
const authRouter  = require("./auth.route");
const carsRouter = require("./cars.route");
const bookingRouter = require("./booking.route");
const paymentRouter = require("./payment.route");

const router = express.Router();

const defaultRoutes = [
    { path: '/auth', route: authRouter },
    { path: '/cars', route: carsRouter },
    { path: '/bookings', route: bookingRouter },
    { path: '/payments', route: paymentRouter },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
