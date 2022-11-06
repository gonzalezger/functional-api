import { Logger, LoggerDI } from '../utils/logger';
import { TodoService } from './todo.service';

type CreateTodoDI = LoggerDI & {
  todoService: TodoService;
};

type GetTodoInfo = {
  id: number;
};

// TODO: Aca los handlers/controllers de alguna forma son agnosticos al framework (Fastify, Express, etc)
// Esta bien? Cuanto gano haciendo esto?
const getTodo =
  ({ logger, todoService }: CreateTodoDI) =>
  ({ id }: GetTodoInfo) => {
    logger.info('From controller');

    return todoService.getTodo({ id });
  };

type CreateTodoServiceDI = Omit<CreateTodoDI, 'logger'>;

// TODO: No me gusta. Se me hace muy verbose tener que duplicar la firma de todas las funciones
// Alternativas???
export type TodoHandler = {
  getTodo: (info: GetTodoInfo) => Promise<unknown>;
};

export const createTodoHandler = (deps: CreateTodoServiceDI) => {
  return (logger: Logger) => ({
    getTodo: getTodo({ ...deps, logger }),
  });
};
