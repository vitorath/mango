import { makeLoadLastRankingController } from "../factories";

import { Request, Response } from 'express';
import { Controller } from "../../presentation/contracts";

export const adaptResolver = async (controller: Controller): Promise<any> => {
    const httpResponse = await controller.handle();
    return httpResponse.data;
}