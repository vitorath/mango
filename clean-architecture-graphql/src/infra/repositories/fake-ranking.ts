import { LoadLastRankingRepository } from "../../application/contracts";
import { RankingScore } from "../../domain/entities";
import { ranking } from '../data-sources';


export class FakeRaningRepository implements LoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScore[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }));
  }
}