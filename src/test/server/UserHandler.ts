import { HttpResponse, http } from 'msw';
import { ApiPrivate } from '../../axios/axios';
import { UserMock } from '../mocks/User.mock';

export const users = [
  new UserMock(),
  new UserMock(),
];

export const UserHandler = [
  http.get(`${ApiPrivate.defaults.baseURL}/v1/users`, () => {
    return HttpResponse.json(users, { status: 200 });
  }),
];
