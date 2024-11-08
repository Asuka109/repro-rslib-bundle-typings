import { ClientDefinition } from 'kit/node';

export interface Foo extends ClientDefinition {
  bar: string;
}

export const foo: Foo = {} as any;
