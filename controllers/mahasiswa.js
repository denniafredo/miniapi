const model = require("../models");
const response = require("../helper");

const controller = {};

controller.getAll = async function (req, res) {
  try {
    const mahasiswa = await model.mahasiswa.findAll();
    res.send(response.ok(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.getById = async function (req, res) {
  if (!req.params.id) return res.send(response.error("id body not found!"));
  try {
    const mahasiswa = await model.mahasiswa.findByPk(req.params.id);
    if (!mahasiswa) return res.send(response.nodata());
    res.send(response.ok(mahasiswa));
  } catch (error) {
    res.send(response.error(error.message));
  }
};

controller.create = async function (req, res) {
  try {
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
  console.log(req.query);

  // try {
  //   console.log(req.query);
  //   // const mahasiswa = await model.mahasiswa.update(req.body, {
  //   //   where: { id: req.params.id },
  //   // });
  //   // res.send(response.updated(mahasiswa));
  // } catch (error) {
  //   res.send(response.error(error.message));
  // }
};

module.exports = controller;
