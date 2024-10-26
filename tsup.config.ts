import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry file(s)
  target: 'es2022', // Specify ECMAScript target version
  format: ['cjs', 'esm'], // Output formats: CommonJS and ESM
  splitting: false, // Disable code splitting
  sourcemap: true, // Generate sourcemaps
  clean: true, // Clean output directory before each build
  dts: true, // Generate declaration files,
  minify: false,
});
