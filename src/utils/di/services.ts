import { DatabaseDI } from '../db';
import { Logger } from '../logger';
import { createTodoService, TodoService } from '../../todo/todo.service';

type CreateServicesDI = DatabaseDI;

export type ServicesDI = {
  todo: TodoService;
};

export const createServices = (deps: CreateServicesDI) => {
  const services = {
    todo: createTodoService({ ...deps }),
  };

  return (logger: Logger) => ({
    todo: services.todo(logger),
  });
};
