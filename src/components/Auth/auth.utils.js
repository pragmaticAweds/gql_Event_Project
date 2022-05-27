const { hashSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { privateKey } = require("../../utils/config");

module.exports.hashPassword = (password) => hashSync(password, 12);

module.exports.verifyPassword = (password, hashPassword) =>
  compareSync(password, hashPassword);

exports.generateToken = (data, exprTime) =>
  jwt.sign(data, privateKey, {
    expiresIn: exprTime,
  });

exports.decodeToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
