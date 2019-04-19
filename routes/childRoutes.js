const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

const childWithPet = `
        fragment ParentWithChildren on Parent {
            id
            name
            pet_name
            pet_experience
            pet_id {
                id
                species
                description
                happy
                ok
                sad
                sick
                eating
            }
        }
    `;

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const child = await prisma.child({ id }).$fragment(childWithPet);
        res.status(200).json(child);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = routes;
