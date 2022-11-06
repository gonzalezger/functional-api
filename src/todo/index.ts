import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance, _: any, next: any) => {
  // TODO: esto deberia ser parte del handler en si??? (todo.handler.ts)
  fastify.get<{ Params: { id: number } }>(
    '/:id',
    {
      schema: {
        params: { type: 'object', properties: { id: { type: 'integer' } } },
      },
    },
    async (req) => {
      const { id } = req.params;

      return req.handlers.todo.getTodo({ id });
    }
  );

  next();
};
