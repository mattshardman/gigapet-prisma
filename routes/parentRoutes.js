const { prisma } = require("../generated/prisma-client");

const routes = require("express").Router();

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
            },
            pet_id: {
                connect: {
                    id: body.pet_id
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

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    const parentWithChildren = `
        fragment ParentWithChildren on Parent {
            id
            name
            email
            username
            img_url
            children {
                id
                name
                pet_name
                pet_experience
            }
        }
    `;

    try {
        const parent = await prisma.parent({ id }).$fragment(parentWithChildren);
        res.status(200).json(parent);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = routes;