import { DatabaseDI } from '../utils/db';
import { Logger, LoggerDI } from '../utils/logger';

type CreateTodoDI = LoggerDI & DatabaseDI;

type GetTodoInfo = {
  id: number;
};

const getTodo =
  ({ db, logger }: CreateTodoDI) =>
  ({ id }: GetTodoInfo) => {
    logger.info('From service');

    return db.get({ id });
  };

type CreateTodoServiceDI = Omit<CreateTodoDI, 'logger'>;

// No me gusta. Se me hace muy verbose tener que duplicar la firma de todas las funciones
// Alternativas???
export type TodoService = {
  getTodo: (info: GetTodoInfo) => Promise<unknown>;
};

export const createTodoService = (deps: CreateTodoServiceDI) => {
  return (logger: Logger) => ({
    getTodo: getTodo({ ...deps, logger }),
  });
};
