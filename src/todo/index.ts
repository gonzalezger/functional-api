import { FastifyInstance } from 'fastify';
import { getTodoSchema } from './schemas/get-todo.schema';
import { GetTodoRequest } from './todo.handler';

export default (fastify: FastifyInstance, _: any, next: any) => {
  // TODO: esto deberia ser parte del handler en si??? (todo.handler.ts)
  fastify.get<{ Params: GetTodoRequest }>(
    '/:id',
    {
      schema: {
        params: getTodoSchema,
      },
    },
    async (req) => {
      const { id } = req.params;

      return req.handlers.todo.getTodo({ id });
    }
  );

  next();
};
