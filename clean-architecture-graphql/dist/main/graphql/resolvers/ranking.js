"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.default = {
    Query: {
        lastRanking: async () => adapters_1.adaptResolver(factories_1.makeLoadLastRankingController())
    }
};
