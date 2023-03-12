const conn = require("../services/db");

exports.getAllMahasiswa = (req, res, next) => {
  conn.query("SELECT * FROM mahasiswa", function (err, data, fields) {
    if (err) return next(err)
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.insertMahasiswa = (req, res, next) => {
  if(!req.body) return 'No Body Found!';
  const values = req.body;
  conn.query("INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?,?,?)",[values.nama,values.nim,values.jurusan], function (err, data, fields) {
    if (err) return next(err)
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};