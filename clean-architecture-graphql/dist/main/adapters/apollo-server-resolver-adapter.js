"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptResolver = void 0;
const adaptResolver = async (controller) => {
    const httpResponse = await controller.handle();
    return httpResponse.data;
};
exports.adaptResolver = adaptResolver;
