import 'reflect-metadata';

type PlainObject = Record<string, any>;

const dict: PlainObject = {};

/**
 * Hello function whithout parameter
 * @returns result string
 */
export function hello(): string;

/**
 * This is hello function
 * @returns result string
 */
export function hello(greet = 'Hello') {
  return `${greet} world`;
}

@sealed
export class X {
  constructor(private readonly o: PlainObject, h?: typeof hello) {
    console.log('h', h);
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Injectable()
export class ParkService {
  welcome = (): string => 'Welcome to park';
}

@Injectable()
export class ZooController {
  constructor(private readonly service: ParkService) {}
  go(): string {
    return this.service.welcome();
  }
}

function Injectable() {
  return target => {};
}
