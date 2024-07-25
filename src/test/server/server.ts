import { setupServer } from 'msw/node';
import { UserHandler } from './UserHandler';

export const server = setupServer(
  ...UserHandler,
);
