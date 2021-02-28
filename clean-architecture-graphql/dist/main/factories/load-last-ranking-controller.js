"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadLastRankingController = void 0;
const services_1 = require("../../application/services");
const repositories_1 = require("../../infra/repositories");
const controllers_1 = require("../../presentation/controllers");
const makeLoadLastRankingController = () => {
    const repo = new repositories_1.FakeRaningRepository();
    const loader = new services_1.LastRankingLoaderService(repo);
    return new controllers_1.LoadLastRankingController(loader);
};
exports.makeLoadLastRankingController = makeLoadLastRankingController;
