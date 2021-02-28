import { setupRoutes } from '../config/routes';

import express from 'express';
import { setupApolloServer } from './apollo.server';

const app = express();
setupApolloServer(app)
setupRoutes(app);
export default app;