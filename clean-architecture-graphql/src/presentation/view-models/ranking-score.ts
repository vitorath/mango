import { RankingScore } from "../../domain/entities";

export class RankingScoreViewModel {
  constructor(
    private readonly player: Player,
    private readonly score: number,
    private readonly matchDate: string,
    private readonly heroes: Hero[]
  ) {}
  

  static map(entity: RankingScore): RankingScoreViewModel {
    return new RankingScoreViewModel(
      entity.player,
      entity.score,
      entity.matchDate.toISOString(),
      entity.heroes
    );
  }

  static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map(RankingScoreViewModel.map);
  }
}

type Player = {
  name: string;
  country: string;
}

type Hero = {
  name: string;
  level: number;
}