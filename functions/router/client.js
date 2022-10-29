const firebaseApp = require("../config/firebaseModule");
const express = require("express");
const cors = require("cors");

const Fauth = firebaseApp.auth();

const router = express.Router();
router.use(cors());
router.options("*", cors);

module.exports = router;
