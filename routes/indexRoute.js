const express = require("express");
const router = express.Router();
// const multer = require("multer");
const indexController = require("../controllers/indexController");
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "public/uploads");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });
router.post(
  "/additem",
  // upload.single("photo"),
  indexController.addNewGroceryItem
);
router.post("/delete/:id", indexController.deleteController);
router.post("/done/:id", indexController.updateDoneController);
router.post("/notdone/:id", indexController.updateNotDoneController);

router.get("/update/:id", indexController.updateGetController);
router.post("/updatepost/:id", indexController.updatePostController);

router.get("/showitem", indexController.showGroceryItems);
module.exports = router;
