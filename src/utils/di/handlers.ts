import { createTodoHandler, TodoHandler } from '../../todo/todo.handler';
import { Logger } from '../logger';
import { ServicesDI } from './services';

type CreateHandlersDI = ServicesDI;

export type HandlersDI = {
  todo: TodoHandler;
};

export const createHandlers = (deps: CreateHandlersDI) => {
  const handlers = {
    todo: createTodoHandler({ todoService: deps.todo }),
  };

  return (logger: Logger) => ({
    todo: handlers.todo(logger),
  });
};
