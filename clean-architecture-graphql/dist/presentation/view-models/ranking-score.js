"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingScoreViewModel = void 0;
class RankingScoreViewModel {
    constructor(player, score, matchDate, heroes) {
        this.player = player;
        this.score = score;
        this.matchDate = matchDate;
        this.heroes = heroes;
    }
    static map(entity) {
        return new RankingScoreViewModel(entity.player, entity.score, entity.matchDate.toISOString(), entity.heroes);
    }
    static mapCollection(entities) {
        return entities.map(RankingScoreViewModel.map);
    }
}
exports.RankingScoreViewModel = RankingScoreViewModel;
