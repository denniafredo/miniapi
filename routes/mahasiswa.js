const router = require("express").Router();
const mahasiswaController = require("../controllers/mahasiswa");

router.route("/mahasiswa").get(mahasiswaController.getAll).post(mahasiswaController.create).put(mahasiswaController.updateByQuery);
router.route("/mahasiswa/:id").get(mahasiswaController.getById).delete(mahasiswaController.deleteById).put(mahasiswaController.updateById);

module.exports = router;
