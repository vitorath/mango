import { LastRankingLoader } from "../../domain/usescases";
import { Controller, HttpResponse, ok, serverError  } from "../contracts";
import { RankingScoreViewModel } from "../view-models";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}
  
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();
      return ok(RankingScoreViewModel.mapCollection(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}