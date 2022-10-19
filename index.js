const bcrypt = require("bcrypt");

const password = "supersecretpass#234";
const password1 = "spersecretpass#5666";
const password2 = "supersecretpass#234";

// generating the salt
const passwordSalt = generateHash(password);
console.log("Password Salt Hash => ", passwordSalt);

console.log(
  "Password_1 is correct? ",
  comparePassword(password1, passwordSalt)
);

console.log(
  "Password_2 is correct? ",
  comparePassword(password2, passwordSalt)
);

function generateHash(pass) {
  return bcrypt.hashSync(pass, 10);
}

function comparePassword(pass, passSalt) {
  return bcrypt.compareSync(pass, passSalt);
}
