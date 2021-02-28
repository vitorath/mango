"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApolloServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const type_defs_1 = __importDefault(require("@/main/graphql/type-defs"));
const resolvers_1 = __importDefault(require("@/main/graphql/resolvers"));
const setupApolloServer = (app) => {
    const server = new apollo_server_express_1.ApolloServer({
        resolvers: resolvers_1.default,
        typeDefs: type_defs_1.default,
    });
    server.applyMiddleware({ app });
};
exports.setupApolloServer = setupApolloServer;
