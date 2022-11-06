export type DatabaseDI = {
  db: {
    get: <T>(obj: T) => Promise<T>;
  };
};

export const fakeDb = {
  get: <T>(obj: T) => Promise.resolve(obj),
};
