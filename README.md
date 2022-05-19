# bug-example
Reproduction of swc error when running jest tests in typescript with visx.

In the first commit, which uses ts-jest, the tests pass.

In the most recent commit, which uses swc-jest, the tests fail due to a parse error: 

```
 FAIL  ./index.test.tsx
  ● Test suite failed to run


      × Expected ':', got ')'
         ╭─[/Users/mnelson/test/testing-failure/node_modules/d3-array/dist/d3-array.js:140:5]
     140 │ : v => (sum += +valueof(v, index++, values) || 0));
         ·                                                  ─
         ╰────


    Caused by:
        0: failed to process input file
        1: Syntax Error

      at Compiler.transformSync (node_modules/@swc/core/index.js:137:25)
      at transformSync (node_modules/@swc/core/index.js:217:21)
      at Object.process (node_modules/@swc/jest/index.js:71:45)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
```
