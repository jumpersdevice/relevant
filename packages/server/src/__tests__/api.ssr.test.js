import { _request } from 'app/utils/api';
import fetchMock from 'fetch-mock';

fetchMock.post('*', { hello: 'world' });

jest.mock('../api/user/user.controller', () => {
  return {
    test: jest.fn(params => params)
  };
});

process.env.TEST_SUITE = 'serverapi';

const getStore = () => ({
  auth: {
    token: 'myToken'
  },
  community: {
    active: 'relevant'
  }
});

const options = {
  query: { search: 'user' },
  params: { _id: '123' },
  endpoint: 'user',
  path: 'test',
  method: 'POST',
  body: { data: 'some data' }
};

describe('server-side api request', () => {
  it('generate correct fetch request', async () => {
    await _request(options, getStore);
    expect(fetchMock.lastCall()).toMatchSnapshot();
  });
});
