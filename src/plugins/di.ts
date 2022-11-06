import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { fakeDb } from '../utils/db';
import { createHandlers, HandlersDI } from '../utils/di/handlers';
import { createServices } from '../utils/di/services';

export default fp((fastify: FastifyInstance, _: any, next: any) => {
  const services = createServices({ db: fakeDb });

  fastify.addHook('onRequest', (req, _, done) => {
    const servicesWithLogger = services(req.log);
    req.handlers = createHandlers(servicesWithLogger)(req.log);

    done();
  });

  next();
});

declare module 'fastify' {
  interface FastifyRequest {
    handlers: HandlersDI;
  }
}
