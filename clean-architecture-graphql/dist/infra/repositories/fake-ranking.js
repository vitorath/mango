"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeRaningRepository = void 0;
const data_sources_1 = require("../data-sources");
class FakeRaningRepository {
    async loadLastRanking() {
        return data_sources_1.ranking.map(item => ({
            player: item.user,
            score: item.score,
            matchDate: new Date(item.date),
            heroes: item.heroes
        }));
    }
}
exports.FakeRaningRepository = FakeRaningRepository;
