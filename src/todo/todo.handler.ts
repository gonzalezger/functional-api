import { Logger, LoggerDI } from '../utils/logger';
import { TodoService } from './todo.service';

type CreateTodoDI = LoggerDI & {
  todoService: TodoService;
};

export type GetTodoRequest = {
  id: number;
};

// TODO: Aca los handlers/controllers de alguna forma son agnosticos al framework (Fastify, Express, etc)
// Esta bien? Cuanto gano haciendo esto? Cuanto pierdo?
const getTodo =
  ({ logger, todoService }: CreateTodoDI) =>
  ({ id }: GetTodoRequest) => {
    logger.info('From controller');

    return todoService.getTodo({ id });
  };

type CreateTodoServiceDI = Omit<CreateTodoDI, 'logger'>;

// TODO: No me gusta. Se me hace muy verbose tener que duplicar la firma de todas las funciones
// Alternativas???
export type TodoHandler = {
  getTodo: (info: GetTodoRequest) => Promise<unknown>;
};

export const createTodoHandler = (deps: CreateTodoServiceDI) => {
  return (logger: Logger) => ({
    getTodo: getTodo({ ...deps, logger }),
  });
};
