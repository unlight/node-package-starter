/**
 * Hello function whithout parameter
 * @returns result string
 * @public
 */
export function hello(): string;

/**
 * This is hello function
 * @returns result string
 * @public
 */
export function hello(greet?: string) {
    return `${greet} world`;
}
