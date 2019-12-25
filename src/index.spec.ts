import * as library from '.';

it('smoke', () => {
    expect(library).toBeTruthy();
});

it('hello test', () => {
    expect(library.hello()).toBe('Hello world');
});
