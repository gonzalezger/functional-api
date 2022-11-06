import { FastifyBaseLogger } from 'fastify';

export type Logger = FastifyBaseLogger;

export type LoggerDI = {
  logger: Logger;
};

// export const createLogger = (service: string): Logger => ({
//   // log: (message: string) => console.log(`[${service}] ${message}`),
// });
