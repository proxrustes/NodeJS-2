import { router } from './lib/router.js';
import { createHttpServer } from './lib/server.js';

const PORT = 8080;

createHttpServer(router, PORT);