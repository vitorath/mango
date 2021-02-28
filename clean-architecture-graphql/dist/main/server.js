"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("./config/app"));
const env_1 = require("./config/env");
app_1.default.listen(env_1.env.port, () => console.log(`server running at: http://localhost:${env_1.env.port}`));
