const { prisma } = require("../generated/prisma-client");
const routes = require("express").Router();

const { generateToken } = require("../middleware/auth");
const { hashPassword, checkPassword } = require("../utils/utilFunctions");

async function register(req, res) {
    const parent = hashPassword(req.body);

    try {
        const newParent = await prisma.createParent(parent);
        const token = generateToken(newParent);
        res.status(200).json({ id: newParent.id, token });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function login(req, res) {
    const { username, password } = req.body;
  
    try {
        const parent = await prisma.parent({ username });
        const passwordsMatch = checkPassword(parent, password);
  
        if (parent && passwordsMatch) {
            const token = generateToken(parent);
            res.status(200).json({ token, id: parent.id });
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "User could not be found" });
    }
}

routes.post("/register", register);
routes.post("/login", login);

module.exports = routes;
