const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");
const singupSchema = require("../validators/authValidator");
const validate = require("../middleware/validateMiddleware");

router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(singupSchema), authControllers.register);

router.route("/login").post(
  // validate(singupSchema)
  authControllers.login
);

module.exports = router;
