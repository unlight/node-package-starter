export function hello(): string;

export function hello(greet?: string) {
    return `${greet} world`;
}
