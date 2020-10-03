import { expect } from 'earljs';

import * as library from '.';

it('smoke', () => {
    expect(library).toEqual(expect.anything());
});

it('hello test', () => {
    expect(library.hello()).toEqual('Hello world');
});
