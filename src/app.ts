import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import di from './plugins/di';
import routes from './routes';

export const createApp = (opts?: FastifyServerOptions): FastifyInstance => {
  const app = fastify(opts);

  app.register(di);

  app.register(routes, { prefix: '/api' });

  return app;
};
