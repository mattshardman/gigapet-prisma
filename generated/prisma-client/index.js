"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `https://eu1.prisma.sh/matt-hardman-b2ba69/gigapet/dev`
});
exports.prisma = new exports.Prisma();
