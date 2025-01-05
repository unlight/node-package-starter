# node-package-starter

1.  git clone https://github.com/unlight/node-package-starter
2.  npm install
3.  node ./node_modules/ghooks/bin/module-install
4.  Remove unnecessary
5.  If necessary

```sh
# setupfrontend
npm i -D ng-packagr @angular/core @angular/compiler-cli @angular/compiler tsickle
# setupwebpack
npm i -D webpack @types/webpack @types/webpack-env webpack-cli webpack-dev-server html-webpack-plugin source-map-loader ts-loader html-loader add-asset-html-webpack-plugin terser-webpack-plugin istanbul-instrumenter-loader swc-loader @swc/core
# setupmutation
npm i -D stryker-cli @stryker-mutator/core @stryker-mutator/api @stryker-mutator/vitest-runner @stryker-mutator/html-reporter
# setupkarma
npm i -D karma @types/karma karma-chrome-launcher karma-jasmine karma-coverage-istanbul-reporter karma-sourcemap-loader karma-webpack @types/jasmine
```

## License

[MIT License](https://opensource.org/licenses/MIT) (c) 2025
