"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastRankingLoaderService = void 0;
const errors_1 = require("../../domain/errors");
class LastRankingLoaderService {
    constructor(loadLastRankingRepository) {
        this.loadLastRankingRepository = loadLastRankingRepository;
    }
    async load() {
        if (new Date().getHours() > 21) {
            throw new errors_1.RankingUnavailableError();
        }
        return this.loadLastRankingRepository.loadLastRanking();
    }
}
exports.LastRankingLoaderService = LastRankingLoaderService;
