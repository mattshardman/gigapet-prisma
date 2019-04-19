const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

async function getPets (req, res) {
    try {
        const parent = await prisma.pets();
        res.status(200).json(parent);
    } catch (error) {
        res.status(500).json(error);
    }
}

routes.get("/pets", getPets);

module.exports = routes;