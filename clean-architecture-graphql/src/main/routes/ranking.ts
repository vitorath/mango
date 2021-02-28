import { makeLoadLastRankingController } from '../factories';
import { adaptRoute } from '../adapters';

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()));
}