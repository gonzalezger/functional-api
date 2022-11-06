import { FastifyInstance } from 'fastify';
import todos from './todo';

export default (fastify: FastifyInstance, opts: any, next: any) => {
  // unprotected routes
  fastify.register(todos, { prefix: '/todos' });

  next();
};
