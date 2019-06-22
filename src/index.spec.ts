/* eslint-disable @typescript-eslint/tslint/config */
import * as lib from './index';

it('smoke', () => {
    expect(lib).toBeTruthy();
});

it('hello test', () => {
    expect(lib.hello()).toBe('Hello world');
});
