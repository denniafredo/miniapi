const router = require('express').Router();
const controllers = require('../controllers/mahasiswa');

router.route('/mahasiswa')
    // to create new resources
    .post(controllers.insertMahasiswa)
    // to retrieve resource
    .get(controllers.getAllMahasiswa);
router.route('/mahasiswa/:id')
    // to retrieve a single resource
    .get(function (req, res, next) {

    })
module.exports = router;