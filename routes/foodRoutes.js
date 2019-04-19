const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

routes.post("/:id/entries", async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const newFoodEntry = await prisma.createFoodEntry({
            ...body,
            child: {
                connect: {
                    id
                }
            }
        });

        res.status(201).json(newFoodEntry);
    } catch (error) {
        res.status(500).json({
            message: "Could not add food entry"
        });
    }
});

routes.get("/:id/entries", async (req, res) => {
    const { id } = req.params;

    try {
        const foodEntries = await prisma.child({ id }).foodEntries();
        res.status(200).json(foodEntries);
    } catch (error) {
        res.status(500).json({
            message: "Could not get foods"
        });
    }
});

module.exports = routes;
