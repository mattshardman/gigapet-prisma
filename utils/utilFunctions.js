const bcrypt = require("bcryptjs");

function hashPassword (body) {
    const parent = body;
    const hash = bcrypt.hashSync(parent.password, 10);
    return { ...parent, password: hash };
}

function checkPassword(parent, password) {
    return bcrypt.compareSync(password, parent.password);
}

module.exports = { 
    hashPassword,
    checkPassword,
};
