const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const child = await prisma.child({ id });
        res.status(200).json(child);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = routes;
