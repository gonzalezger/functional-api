import { createApp } from './app';

const app = createApp({ logger: true });

const start = async () => {
  try {
    await app.listen({ port: 4000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
