const { hashSync } = require("bcryptjs");

const parents = [
    {
        "email": "bill@billybob.com",
        "name": "bill",
        "username": "billy",
        "password": hashSync("xxx", 10),
        "pin": "1234",
        "img_url": ""
    }
];

module.exports = parents;