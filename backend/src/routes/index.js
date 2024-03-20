const express = require('express');
const clientRoute = require('./client');
const adminRoute = require("./admin");

const router = express.Router();

const defaultRoutes = [
    {
        path: '/admin',
        route: adminRoute,
    },
    {
        path: '/client',
        route: clientRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;
