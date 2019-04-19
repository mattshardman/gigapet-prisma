const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const parent = await prisma.parent({
            id
        });
        res.status(200).json(parent);
    } catch (error) {
        res.status(500).json(error);
    }
});

routes.post("/:id/child", async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const newChild = await prisma.createChild({
            ...body,
            parent: {
                connect: {
                    id
                }
            }
        });

        res.status(201).json(newChild);
    } catch (error) {
        res.status(500).json({
            message: "Could not add child"
        });
    }
});

module.exports = routes;