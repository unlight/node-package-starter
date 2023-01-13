import { expect } from 'expect';

import { hello } from './index';

it('smoke', () => {
  expect(1).toEqual(expect.anything());
});

it('hello test', () => {
  expect(hello()).toEqual('Hello world');
});
