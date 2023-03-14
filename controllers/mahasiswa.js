const model = require("../models");
const response = require("../helper");
const uploadFile = require("../middleware/uploadFileMiddleware");
const path = require('path');
const fs = require('fs');

const controller = {};

controller.getAll = async function (req, res) {

  try {
    const mahasiswa = await model.mahasiswa.findAll(req.query ? {
      where: req.query
    } : null);
    res.send(response.ok(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.getById = async function (req, res) {
  try {
    const mahasiswa = await model.mahasiswa.findByPk(req.params.id);
    if (!mahasiswa) return res.send(response.nodata());
    res.send(response.ok(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.downloadById = async function (req, res) {
  try {
    const mahasiswa = await model.mahasiswa.findByPk(req.params.id);
    if (!mahasiswa || !mahasiswa.photo) return res.send(response.nodata());
    let fileLocation = __basedir +'/file/uploads/'+ mahasiswa.photo;
    if (!fs.existsSync(fileLocation)) {
      return res.send(response.error("File not found!"));
    }
    res.download(fileLocation);
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.create = async function (req, res) {
  try {
    const statusUpload = await uploadFile(req, res);
    console.log(statusUpload);
    if (req.file == undefined) {
      return res.send(response.error("Upload a file please!"));
    }
    const filename = req.file.originalname;
    req.body.photo = filename;
    const mahasiswa = await model.mahasiswa.create(req.body);
    res.send(response.created(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.deleteById = async function (req, res) {
  try {
    const mahasiswa = await model.mahasiswa.destroy({
      where: { id: req.params.id },
    });
    res.send(response.deleted(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.updateById = async function (req, res) {
  try {
    const mahasiswa = await model.mahasiswa.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(response.updated(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.updateByQuery = async function (req, res) {

  try {
    const mahasiswa = await model.mahasiswa.update(req.body, {
      where: req.query,
    });
    res.send(response.updated(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

module.exports = controller;
