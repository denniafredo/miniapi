const { Sequelize, DataTypes } = require("sequelize");
const db = require("../services/db");
const Data = require("../data/mahasiswa");

const mahasiswa = db.define(
  "mahasiswa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jurusan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

db.sync({ force: true }).then(() => {
    console.log(Data);
  mahasiswa.bulkCreate(Data);
}).catch((error)=>{
    console.log(error);
});

module.exports = mahasiswa;
