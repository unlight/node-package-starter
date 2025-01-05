import { expect } from 'expect';
import { inspect } from 'util';

import { hello } from './index.ts';

it('smoke', () => {
  expect(1).toEqual(expect.anything());
});

it('hello test', () => {
  expect(hello()).toEqual('Hello world');
});
