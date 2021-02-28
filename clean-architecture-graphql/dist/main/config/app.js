"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../config/routes");
const express_1 = __importDefault(require("express"));
const apollo_server_1 = require("./apollo.server");
const app = express_1.default();
apollo_server_1.setupApolloServer(app);
routes_1.setupRoutes(app);
exports.default = app;
