"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../factories");
const adapters_1 = require("../adapters");
exports.default = (router) => {
    router.get('/rankings/last', adapters_1.adaptRoute(factories_1.makeLoadLastRankingController()));
};
