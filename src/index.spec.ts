import { expect } from 'expect';
import { inspect } from 'util';

import { hello } from './index';

it('smoke', () => {
  expect(1).toEqual(expect.anything());
});

it('hello test', () => {
  expect(hello()).toEqual('Hello world');
});
