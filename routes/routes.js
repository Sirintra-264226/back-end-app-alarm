const express = require("express");
const {
  getLogin
} = require("../controllers/loginController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// login
router.get("/login/:username/:password", getLogin);
router.get("/register", (req, res) => {
  return res.status(200).send("ลงทะเบียน");
});
// router.get("/login/:id", getAccount);
// router.post("/login", addAccount);
// router.put("/login/:id", updateAccount);
// router.delete("/login/:id", deleteAccount);

module.exports = {
  routes: router,
};
