"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
  extend type Query {
    lastRanking: [RankingScore!]
  }

  type RankingScore {
    player: Player!
    score: Int!
    matchDate: String!
    heroes: [Hero!]!
  }
  
  type Player {
    name: String!
    country: String!
  }
  
  type Hero {
    name: String!
    level: Int!
  }
`;
