import { _request } from 'app/utils/api';

jest.mock('../api/user/user.controller', () => {
  return {
    test: jest.fn(params => params)
  };
});

const { test } = require('../api/user/user.controller');

process.env.TEST_SUITE = 'serverapi';

const getStore = () => ({
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
    expect(test).toMatchSnapshot();
    expect(test).toBeCalled();
  });
});
