"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadLastRankingController = void 0;
const contracts_1 = require("../contracts");
const view_models_1 = require("../view-models");
class LoadLastRankingController {
    constructor(lastRankingLoader) {
        this.lastRankingLoader = lastRankingLoader;
    }
    async handle() {
        try {
            const ranking = await this.lastRankingLoader.load();
            return contracts_1.ok(view_models_1.RankingScoreViewModel.mapCollection(ranking));
        }
        catch (error) {
            return contracts_1.serverError(error);
        }
    }
}
exports.LoadLastRankingController = LoadLastRankingController;
