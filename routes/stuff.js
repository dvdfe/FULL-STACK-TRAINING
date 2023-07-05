const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff")
const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")

router.post("/", auth, multer, stuffCtrl.createThing) 

router.delete("/:id", auth, stuffCtrl.deleteThing)

router.put("/:id", auth, multer, stuffCtrl.modifyThing)

router.get("/:id", auth, stuffCtrl.getOneThing)

router.get("/", auth, stuffCtrl.getAllThings)

module.exports = router;
