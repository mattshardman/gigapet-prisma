const { prisma } = require("../generated/prisma-client");
const pets = require("./petData");
const parents = require("./parentData");

async function seedPet(data) {
    await prisma.createPet(data);
}

async function seedParent(data) {
    await prisma.createParent(data);
}

pets.forEach(pet => seedPet(pet));
parents.forEach(parent => seedParent(parent));