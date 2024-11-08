import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      source: {
        entry: { foo: './src/foo.ts' }
      },
      dts: { bundle: true },
      format: 'cjs',
      bundle: true,
    },
    {
      source: {
        entry: { bar: './src/bar.ts' }
      },
      dts: { bundle: true },
      format: 'cjs',
      bundle: true,
    }
  ],
});
