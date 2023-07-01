const bcrypt = require("bcrypt");

const hashString = async function (stringToHash) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(stringToHash, salt);
};

const compareEncryption = async function (encrypted, real) {
  const correct = await bcrypt.compare(real, encrypted);
  return correct;
};

module.exports = { hashString, compareEncryption };
