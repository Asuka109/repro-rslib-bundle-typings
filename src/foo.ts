import { ClientDefinition } from 'kit';

export interface Foo extends ClientDefinition {
  bar: string;
}

export const foo: Foo = {} as any;
