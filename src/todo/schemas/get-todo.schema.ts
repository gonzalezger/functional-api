const getTodoSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
  },
  required: ['id'],
} as const;

export { getTodoSchema };
