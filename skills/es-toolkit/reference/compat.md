
# Compat Utilities

This page lists all compat utilities available in es-toolkit.
| Name | Description | Link |
| --- | --- | --- |
| add | This `add` function operates slowly due to complex type conversion and string handling. | [add](reference/compat/math/add.md) |
| ceil | This `ceil` function operates slowly due to decimal place calculations and internal function calls. | [ceil](reference/compat/math/ceil.md) |
| clamp | This `clamp` function operates slowly due to NaN validation and handling. | [clamp](reference/compat/math/clamp.md) |
| divide | This `divide` function operates slowly due to additional function calls. | [divide](reference/compat/math/divide.md) |
| floor | This `floor` function operates slowly due to decimal place calculations and internal function calls. | [floor](reference/compat/math/floor.md) |
| inRange | This `inRange` function works slowly due to complex type conversion and null/undefined handling. | [inRange](reference/compat/math/inRange.md) |
| max | This `max` function works slowly due to additional function calls and `null`/`undefined` handling. | [max](reference/compat/math/max.md) |
| maxBy | This `maxBy` function works slowly due to iteratee function processing and type conversion. | [maxBy](reference/compat/math/maxBy.md) |
| mean | This `mean` function works slowly due to type conversion and null/undefined handling. | [mean](reference/compat/math/mean.md) |
| meanBy | This `meanBy` function works slowly due to iteratee function processing and type conversion. | [meanBy](reference/compat/math/meanBy.md) |
| min | This `min` function works slowly due to additional function calls and null/undefined handling. | [min](reference/compat/math/min.md) |
| minBy | This `minBy` function works slowly due to iteratee function processing and type conversion. | [minBy](reference/compat/math/minBy.md) |
| multiply | This `multiply` function works slowly due to additional function calls. | [multiply](reference/compat/math/multiply.md) |
| parseInt | This `parseInt` function works slowly due to additional function calls. | [parseInt](reference/compat/math/parseInt.md) |
| random | This `random` function works slowly due to complex argument processing and type conversion. | [random](reference/compat/math/random.md) |
| range | This `range` function works slowly due to complex argument processing and type conversion. | [range](reference/compat/math/range.md) |
| rangeRight | This `rangeRight` function works slowly due to complex argument processing and type conversion. | [rangeRight](reference/compat/math/rangeRight.md) |
| round | This `round` function works slowly due to precision handling. | [round](reference/compat/math/round.md) |
| subtract | This `subtract` function works slowly due to additional function calls. | [subtract](reference/compat/math/subtract.md) |
| sum | This `sum` function works slowly due to type conversion and null/undefined handling. | [sum](reference/compat/math/sum.md) |
| sumBy | This `sumBy` function works slowly due to iteratee function processing and type conversion. | [sumBy](reference/compat/math/sumBy.md) |
| castArray | This `castArray` function behaves complexly due to no-argument handling and `undefined` processing. | [castArray](reference/compat/array/castArray.md) |
| chunk | This `chunk` function operates slower due to handling of `null`, `undefined`, and default `size` values. | [chunk](reference/compat/array/chunk.md) |
| compact | This `compact` function operates slowly due to handling `null` or `undefined`, `size` default value processing, and more. | [compact](reference/compat/array/compact.md) |
| concat | This `concat` function operates inefficiently due to the complex way Lodash handles array concatenation. | [concat](reference/compat/array/concat.md) |
| countBy | This `countBy` function operates slowly due to complex transformation function processing and type conversion. | [countBy](reference/compat/array/countBy.md) |
| difference | This `difference` function operates in a complex manner due to handling `null` or `undefined` and processing multiple array arguments. | [difference](reference/compat/array/difference.md) |
| differenceBy | This `differenceBy` function operates slowly due to complex argument processing and iteratee transformation. | [differenceBy](reference/compat/array/differenceBy.md) |
| differenceWith | This `differenceWith` function operates slowly due to handling `null` or `undefined`, processing multiple arrays, and `ArrayLike` type processing. | [differenceWith](reference/compat/array/differenceWith.md) |
| drop | This `drop` function operates in a complex manner due to handling of `null` or `undefined`, `toInteger` conversion, etc. | [drop](reference/compat/array/drop.md) |
| dropRight | This `dropRight` function operates slowly due to handling `null` or `undefined`, `guard` parameter processing, `toInteger` conversion, etc. | [dropRight](reference/compat/array/dropRight.md) |
| dropRightWhile | This `dropRightWhile` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, support for various predicate function formats, etc. | [dropRightWhile](reference/compat/array/dropRightWhile.md) |
| dropWhile | This `dropWhile` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, support for various predicate function formats, etc. | [dropWhile](reference/compat/array/dropWhile.md) |
| each | This `each` function operates slowly due to complex type processing and support for various collection types. | [each](reference/compat/array/each.md) |
| eachRight | This `eachRight` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, support for various predicate function formats, etc. | [eachRight](reference/compat/array/eachRight.md) |
| every | This `every` function operates slowly due to complex object processing, support for various condition formats, etc. | [every](reference/compat/array/every.md) |
| fill | This `fill` function operates with complex behavior due to handling `null` or `undefined`, support for array-like objects, etc. | [fill](reference/compat/array/fill.md) |
| filter | This `filter` function operates slowly due to complex object processing, support for various condition formats, etc. | [filter](reference/compat/array/filter.md) |
| find | This `find` function operates slowly due to complex object processing, support for various condition formats, etc. | [find](reference/compat/array/find.md) |
| findIndex | This `findIndex` function operates slowly due to additional features such as handling various condition formats and `fromIndex` processing. | [findIndex](reference/compat/array/findIndex.md) |
| findLast | This `findLast` function is complex and slow due to handling various types and special conditions. | [findLast](reference/compat/array/findLast.md) |
| findLastIndex | This `findLastIndex` function operates slowly due to additional features such as handling `null` or `undefined`, partial object matching, and property name matching. | [findLastIndex](reference/compat/array/findLastIndex.md) |
| first | This `first` function operates slowly due to handling `null` or `undefined` and array-like object conversion. The `head` function from `es-toolkit` operates faster and simpler without this additional processing. | [first](reference/compat/array/first.md) |
| flatMap | This `flatMap` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, and supporting various condition function formats. | [flatMap](reference/compat/array/flatMap.md) |
| flatMapDeep | This `flatMapDeep` function operates slowly due to complex collection type handling and deep flattening logic. | [flatMapDeep](reference/compat/array/flatMapDeep.md) |
| flatMapDepth | This `flatMapDepth` function is implemented in a complex way to support various forms of iteratees and handle `null` or `undefined` for Lodash compatibility. The `flatMap` function in the main library only supports simple function iteratees, so it operates faster. | [flatMapDepth](reference/compat/array/flatMapDepth.md) |
| flatten | This `flatten` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, and supporting various condition function formats. | [flatten](reference/compat/array/flatten.md) |
| flattenDeep | This `flattenDeep` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, and supporting various condition function formats. | [flattenDeep](reference/compat/array/flattenDeep.md) |
| flattenDepth | This `flattenDepth` function operates slowly due to handling `null` or `undefined`. The `flatten` function from `es-toolkit` operates faster and simpler without this additional processing. | [flattenDepth](reference/compat/array/flattenDepth.md) |
| forEach | This `forEach` function operates slowly due to complex object processing, early termination logic, and more. | [forEach](reference/compat/array/forEach.md) |
| forEachRight | This `forEachRight` function operates slowly due to handling `null` or `undefined`, `ArrayLike` type processing, support for various predicate function formats, etc. | [forEachRight](reference/compat/array/forEachRight.md) |
| groupBy | This `groupBy` function operates slowly due to handling `null` or `undefined`, object support, complex type processing, etc. | [groupBy](reference/compat/array/groupBy.md) |
| head | This `head` function operates slowly due to `ArrayLike` object processing and array conversion process. | [head](reference/compat/array/head.md) |
| includes | This `includes` function operates slowly due to object iteration and SameValueZero comparison processing. For arrays, JavaScript's native `Array.prototype.includes` method is faster and more standardized. | [includes](reference/compat/array/includes.md) |
| indexOf | This `indexOf` function operates slowly due to additional logic for handling `NaN`. | [indexOf](reference/compat/array/indexOf.md) |
| initial | This `initial` function operates slowly due to `ArrayLike` object processing and array conversion process. | [initial](reference/compat/array/initial.md) |
| intersection | This `intersection` function operates slowly due to handling `null` or `undefined`, multiple array support, and duplicate removal process. | [intersection](reference/compat/array/intersection.md) |
| intersectionBy | This `intersectionBy` function operates slowly due to complex condition processing, multiple array support, property path parsing, etc. | [intersectionBy](reference/compat/array/intersectionBy.md) |
| intersectionWith | This `intersectionWith` function operates slowly due to handling `null` or `undefined`, support for various overloads, etc. | [intersectionWith](reference/compat/array/intersectionWith.md) |
| invokeMap | This `invokeMap` function is slow due to handling `null` or `undefined`, method lookups, etc. | [invokeMap](reference/compat/array/invokeMap.md) |
| join | This `join` function is slow due to handling ArrayLike objects, null/undefined, etc. | [join](reference/compat/array/join.md) |
| keyBy | This `keyBy` function is slow due to handling `null` or `undefined`, various parameter types, etc. | [keyBy](reference/compat/array/keyBy.md) |
| last | This `last` function behaves complexly due to handling `null` or `undefined`. | [last](reference/compat/array/last.md) |
| lastIndexOf | This `lastIndexOf` function operates slowly due to handling `null` or `undefined`, searching for `NaN` values, etc. | [lastIndexOf](reference/compat/array/lastIndexOf.md) |
| map | This `map` function operates slowly due to additional features such as handling `null` or `undefined`, object iteration, and property extraction. When transforming arrays, JavaScript's built-in `Array.prototype.map` method is faster and simpler. | [map](reference/compat/array/map.md) |
| nth | This `nth` function operates slowly due to handling `null` or `undefined` and integer conversion. | [nth](reference/compat/array/nth.md) |
| orderBy | This `orderBy` function operates slowly due to handling `null` or `undefined`, complex path navigation, and various sorting criteria. | [orderBy](reference/compat/array/orderBy.md) |
| partition | This `partition` function operates slowly due to handling `null` or `undefined` and various predicate types. | [partition](reference/compat/array/partition.md) |
| pull | This `pull` function is for Lodash compatibility and operates slower due to more complex type handling and overloading. | [pull](reference/compat/array/pull.md) |
| pullAll | Removes all values from the array that are contained in the array of specified values. | [pullAll](reference/compat/array/pullAll.md) |
| pullAllBy | Removes specified values from the array based on values transformed by an iteratee. | [pullAllBy](reference/compat/array/pullAllBy.md) |
| pullAllWith | Removes specified values from an array using a comparison function. | [pullAllWith](reference/compat/array/pullAllWith.md) |
| pullAt | This `pullAt` function operates slowly due to complex type handling and overloading. | [pullAt](reference/compat/array/pullAt.md) |
| reduce | This `reduce` function operates slowly due to complex type handling and support for various input formats. | [reduce](reference/compat/array/reduce.md) |
| reduceRight | This `reduceRight` function operates slowly due to complex type handling and support for various input formats. | [reduceRight](reference/compat/array/reduceRight.md) |
| reject | This `reject` function is implemented with complexity to support various predicate forms for compatibility with Lodash. For simple function predicates, `Array.filter()` works more simply and faster. | [reject](reference/compat/array/reject.md) |
| remove | This `remove` function is implemented in a complex way to support various forms of predicates for Lodash compatibility. The `remove` function in the main library only supports simple function predicates, so it operates faster. | [remove](reference/compat/array/remove.md) |
| reverse | This `reverse` function includes `null` and `undefined` handling for Lodash compatibility. If you only need simple array reversal, the native JavaScript `Array.prototype.reverse()` method is more intuitive and faster. | [reverse](reference/compat/array/reverse.md) |
| sample | This `sample` function operates slowly due to `null` or `undefined` handling, object value processing, etc. | [sample](reference/compat/array/sample.md) |
| sampleSize | This `sampleSize` function operates slowly due to `null` or `undefined` handling, object support, default value processing, etc. | [sampleSize](reference/compat/array/sampleSize.md) |
| shuffle | This `shuffle` function includes additional processing for Lodash compatibility and operates slowly. | [shuffle](reference/compat/array/shuffle.md) |
| size | This `size` function operates complexly due to `null`, `undefined` handling and support for various types. | [size](reference/compat/array/size.md) |
| slice | This `slice` function operates slowly due to `null` or `undefined` handling and special processing of sparse arrays. JavaScript's native `Array.prototype.slice` method is faster and more standardized. | [slice](reference/compat/array/slice.md) |
| some | This `some` function operates in a complex manner due to handling various types of conditions and object support. | [some](reference/compat/array/some.md) |
| sortBy | This `sortBy` function behaves in a complex way due to handling various types of criteria and object support. | [sortBy](reference/compat/array/sortBy.md) |
| sortedIndex | This `sortedIndex` function operates with complexity due to handling `null`, `undefined`, and various type support. | [sortedIndex](reference/compat/array/sortedIndex.md) |
| sortedIndexBy | This `sortedIndexBy` function operates slowly due to complex iteratee handling and type conversion. | [sortedIndexBy](reference/compat/array/sortedIndexBy.md) |
| sortedIndexOf | This `sortedIndexOf` function operates slowly due to complex binary search handling and type validation. | [sortedIndexOf](reference/compat/array/sortedIndexOf.md) |
| sortedLastIndex | This `sortedLastIndex` function operates slowly due to complex binary search handling and type validation. | [sortedLastIndex](reference/compat/array/sortedLastIndex.md) |
| sortedLastIndexBy | This `sortedLastIndexBy` function operates slowly due to complex iteratee handling and type conversion. | [sortedLastIndexBy](reference/compat/array/sortedLastIndexBy.md) |
| sortedLastIndexOf | This `sortedLastIndexOf` function operates slowly due to complex binary search handling and type validation. | [sortedLastIndexOf](reference/compat/array/sortedLastIndexOf.md) |
| tail | This `tail` function operates slowly due to handling `null` or `undefined`. | [tail](reference/compat/array/tail.md) |
| take | This `take` function operates slowly due to additional processing for compatibility with Lodash. | [take](reference/compat/array/take.md) |
| takeRight | This `takeRight` function operates slowly due to handling `null` or `undefined`. | [takeRight](reference/compat/array/takeRight.md) |
| takeRightWhile | This `takeRightWhile` function operates slowly due to handling `null` or `undefined`. | [takeRightWhile](reference/compat/array/takeRightWhile.md) |
| takeWhile | This `takeWhile` function operates slowly due to handling `null` or `undefined`. | [takeWhile](reference/compat/array/takeWhile.md) |
| union | This `union` function operates slowly due to complex array processing. | [union](reference/compat/array/union.md) |
| unionBy | This `unionBy` function operates slowly due to complex processing. | [unionBy](reference/compat/array/unionBy.md) |
| unionWith | This `unionWith` function operates slowly due to complex processing. | [unionWith](reference/compat/array/unionWith.md) |
| uniq | This `uniq` function operates slowly due to additional processing for Lodash compatibility. | [uniq](reference/compat/array/uniq.md) |
| uniqBy | This `uniqBy` function operates slowly due to handling of `null` or `undefined`, complex argument type processing, etc. | [uniqBy](reference/compat/array/uniqBy.md) |
| uniqWith | This `uniqWith` function operates slowly due to handling of `null` or `undefined`, complex argument type processing, etc. | [uniqWith](reference/compat/array/uniqWith.md) |
| unzip | This `unzip` function operates slowly due to handling of `null` or `undefined`, filtering of non-array values, etc. | [unzip](reference/compat/array/unzip.md) |
| unzipWith | This `unzipWith` function operates slowly due to handling of `null` or `undefined`, `ArrayLike` type processing, support for various condition function forms, etc. | [unzipWith](reference/compat/array/unzipWith.md) |
| without | This `without` function operates slowly due to additional processing for Lodash compatibility. | [without](reference/compat/array/without.md) |
| xor | This `xor` function operates slowly due to handling of `null` or `undefined`, complex duplicate calculation logic, etc. | [xor](reference/compat/array/xor.md) |
| xorBy | This `xorBy` function operates slowly due to handling of `null` or `undefined`, complex duplicate calculation logic, etc. | [xorBy](reference/compat/array/xorBy.md) |
| xorWith | This `xorWith` function operates slowly due to handling of `null` or `undefined`, complex duplicate calculation logic, etc. | [xorWith](reference/compat/array/xorWith.md) |
| zip | This `zip` function operates slowly due to additional processing for Lodash compatibility. | [zip](reference/compat/array/zip.md) |
| zipObject | This `zipObject` function operates slowly due to additional processing for Lodash compatibility. | [zipObject](reference/compat/array/zipObject.md) |
| zipObjectDeep | Creates a deeply nested object using a path array and a value array. | [zipObjectDeep](reference/compat/array/zipObjectDeep.md) |
| zipWith | This `zipWith` function operates slowly due to additional processing for Lodash compatibility. | [zipWith](reference/compat/array/zipWith.md) |
| after | This `after` function operates slowly due to complex type validation and integer conversion handling. | [after](reference/compat/function/after.md) |
| ary | This `ary` function operates slowly due to complex parameter validation. | [ary](reference/compat/function/ary.md) |
| attempt | This `attempt` function can be confusing because it returns both errors and return values without distinction. | [attempt](reference/compat/function/attempt.md) |
| before | This `before` function operates slower due to complex type validation and integer conversion handling. | [before](reference/compat/function/before.md) |
| bind | This `bind` function operates slowly due to complex placeholder handling, constructor function checking, and argument merging logic. If you don't need placeholders, the native `Function.prototype.bind()` is faster and simpler. | [bind](reference/compat/function/bind.md) |
| bindKey | This `bindKey` function operates in a complex and slow manner due to dynamic method binding and placeholder handling. Using JavaScript's native `bind` method or arrow functions is simpler and performs better. | [bindKey](reference/compat/function/bindKey.md) |
| curry | This `curry` function performs slowly due to complex placeholder handling, arity validation, and argument composition logic. | [curry](reference/compat/function/curry.md) |
| curryRight | This `curryRight` function operates slowly due to complex placeholder handling, arity validation, and argument composition logic. | [curryRight](reference/compat/function/curryRight.md) |
| debounce | This `debounce` function has overhead due to complex `maxWait` handling and Lodash-compatible option structure. | [debounce](reference/compat/function/debounce.md) |
| defer | This `defer` function is a simple wrapper that internally calls `setTimeout(func, 1, ...args)`. | [defer](reference/compat/function/defer.md) |
| delay | This `delay` function is a simple wrapper around `setTimeout`, but has slight overhead due to additional type validation and number conversion. | [delay](reference/compat/function/delay.md) |
| flip | This `flip` function simply reverses the order of function arguments. In most cases, it can be replaced with simpler approaches. | [flip](reference/compat/function/flip.md) |
| flow | This `flow` function has become complex with added array flattening for Lodash compatibility. | [flow](reference/compat/function/flow.md) |
| flowRight | This `flowRight` function has become complex with added array flattening for Lodash compatibility. | [flowRight](reference/compat/function/flowRight.md) |
| identity | This `identity` function has the same functionality in the main `es-toolkit` library. It simply returns the input value as is. | [identity](reference/compat/function/identity.md) |
| memoize | This `memoize` function operates slowly due to `null` checks in the `resolver` function, complex type handling for the `MapCache` interface, and additional overhead for Lodash compatibility. | [memoize](reference/compat/function/memoize.md) |
| negate | This `negate` function simply negates the result of a function. In most cases, it's simpler and faster to use the logical NOT operator (`!`) directly. | [negate](reference/compat/function/negate.md) |
| noop | `es-toolkit` also has a noop function that behaves the same. | [noop](reference/compat/function/noop.md) |
| nthArg | This `nthArg` function simply creates a wrapper function that returns the argument at a specific index. You can implement the same functionality more concisely and clearly using arrow functions. | [nthArg](reference/compat/function/nthArg.md) |
| once | This `once` function has the same functionality as the main library once function in `es-toolkit`. | [once](reference/compat/function/once.md) |
| overArgs | This `overArgs` function creates a complex wrapper that transforms each argument, resulting in slow performance. Using arrow functions to transform arguments directly results in clearer and faster code. | [overArgs](reference/compat/function/overArgs.md) |
| partial | This `partial` function is inefficient due to many overloads and union type handling. In most cases, it can be replaced with a simpler arrow function. | [partial](reference/compat/function/partial.md) |
| partialRight | This `partialRight` function is inefficient due to many overloads and union type handling. In most cases, it can be replaced with a simpler arrow function. | [partialRight](reference/compat/function/partialRight.md) |
| rearg | This `rearg` function creates a complex wrapper that rearranges argument order, which can be slow. You can write clearer and faster code by directly rearranging argument order using arrow functions. | [rearg](reference/compat/function/rearg.md) |
| rest | This `rest` function may have reduced performance due to additional logic such as default value handling and index validation. | [rest](reference/compat/function/rest.md) |
| spread | This `spread` function handles complex logic to spread array arguments at a specific index into individual arguments, which can be slow. | [spread](reference/compat/function/spread.md) |
| throttle | This `throttle` function uses the debounce function internally for Lodash compatibility, making it somewhat complex. It also has more complex default and option handling. | [throttle](reference/compat/function/throttle.md) |
| unary | This `unary` function is implemented as a special case of the `ary` function. If you need more control, it's more efficient to use ary from `es-toolkit` directly. | [unary](reference/compat/function/unary.md) |
| wrap | This `wrap` function simply wraps a function. In most cases, it's clearer to use simpler higher-order functions or closures. | [wrap](reference/compat/function/wrap.md) |
| assign | This `assign` function operates slowly due to additional logic that checks whether values are equal. | [assign](reference/compat/object/assign.md) |
| assignIn | This `assignIn` function operates slowly due to additional processing for copying inherited properties and value comparison logic. | [assignIn](reference/compat/object/assignIn.md) |
| assignInWith | This `assignInWith` function operates slowly and in a complex manner due to inherited property processing and customizer function calls. | [assignInWith](reference/compat/object/assignInWith.md) |
| assignWith | This `assignWith` function is relatively slow due to complex customizer function processing. | [assignWith](reference/compat/object/assignWith.md) |
| at | This `at` function is relatively slow due to complex path processing and handling of various argument types. | [at](reference/compat/object/at.md) |
| clone | This `clone` function is relatively slow due to complex logic that handles special object types. | [clone](reference/compat/object/clone.md) |
| cloneDeep | This `cloneDeep` function is relatively slow due to complex logic that handles special object types. | [cloneDeep](reference/compat/object/cloneDeep.md) |
| cloneDeepWith | This `cloneDeepWith` function is relatively slow due to complex customizer function and deep copy processing. | [cloneDeepWith](reference/compat/object/cloneDeepWith.md) |
| cloneWith | This `cloneWith` function is relatively slow due to complex customizer function processing. | [cloneWith](reference/compat/object/cloneWith.md) |
| create | This `create` function is relatively slow due to complex property processing logic. | [create](reference/compat/object/create.md) |
| defaults | This `defaults` function operates slowly due to complex logic that handles `undefined` and properties inherited from `Object.prototype` specially. | [defaults](reference/compat/object/defaults.md) |
| defaultsDeep | This `defaultsDeep` function operates slowly and complexly due to recursive merging of nested objects and circular reference handling. | [defaultsDeep](reference/compat/object/defaultsDeep.md) |
| extend | This `extend` function performs slower due to complex logic that handles properties inherited from the prototype chain. | [extend](reference/compat/object/extend.md) |
| extendWith | This `extendWith` function is complex and slow due to handling inherited properties from the prototype chain and custom merge logic. | [extendWith](reference/compat/object/extendWith.md) |
| findKey | This `findKey` function operates in a complex manner due to various condition type handling and compatibility logic. | [findKey](reference/compat/object/findKey.md) |
| findLastKey | This `findLastKey` function operates in a complex manner due to various condition type handling and compatibility logic. | [findLastKey](reference/compat/object/findLastKey.md) |
| forIn | This `forIn` function operates slowly due to handling `null` or `undefined`, setting up default `iteratee`, and more. | [forIn](reference/compat/object/forIn.md) |
| forInRight | This `forInRight` function performs slowly due to creating key arrays, reverse iteration, and handling `null` or `undefined`. | [forInRight](reference/compat/object/forInRight.md) |
| forOwn | This `forOwn` function operates slowly due to internally calling the `keys` function, object conversion processes, and handling of `null` or `undefined`. | [forOwn](reference/compat/object/forOwn.md) |
| forOwnRight | This `forOwnRight` function operates slowly due to internal calls to the `keys` function, object transformation processes, and reverse iteration. | [forOwnRight](reference/compat/object/forOwnRight.md) |
| fromPairs | This `fromPairs` function operates slowly due to array-like object checks and iteration processing. | [fromPairs](reference/compat/object/fromPairs.md) |
| functions | This `functions` function operates slowly as it internally goes through the `keys` function and filtering process. | [functions](reference/compat/object/functions.md) |
| functionsIn | This `functionsIn` function operates slowly due to the `for...in` loop and function checking process. | [functionsIn](reference/compat/object/functionsIn.md) |
| get | This `get` function performs slowly due to complex path parsing, handling `null` or `undefined`, and default value processing. | [get](reference/compat/object/get.md) |
| has | This `has` function is slow due to complex path parsing and array index handling. | [has](reference/compat/object/has.md) |
| hasIn | This `hasIn` function performs slowly due to complex path parsing and prototype chain checking. | [hasIn](reference/compat/object/hasIn.md) |
| invert | This `invert` function operates slower due to the complex processing required for Lodash compatibility. | [invert](reference/compat/object/invert.md) |
| invertBy | This `invertBy` function operates slowly due to complex iterator processing and grouping logic. | [invertBy](reference/compat/object/invertBy.md) |
| keys | This `keys` function operates slowly due to complex logic for handling array-like objects, prototype objects, etc. | [keys](reference/compat/object/keys.md) |
| keysIn | This `keysIn` function operates slowly due to complex logic such as handling array-like objects and traversing the prototype chain. | [keysIn](reference/compat/object/keysIn.md) |
| mapKeys | This `mapKeys` function is relatively slow due to handling `null` or `undefined` and the `iteratee` conversion process. | [mapKeys](reference/compat/object/mapKeys.md) |
| mapValues | This `mapValues` function is relatively slow due to handling `null` or `undefined` and the `iteratee` conversion process. | [mapValues](reference/compat/object/mapValues.md) |
| merge | This `merge` function is relatively slow as it internally calls the complex `mergeWith` function. | [merge](reference/compat/object/merge.md) |
| mergeWith | This `mergeWith` function is relatively slow due to complex type checking, circular reference handling, and special object processing. | [mergeWith](reference/compat/object/mergeWith.md) |
| omit | This `omit` function is relatively slow due to deep copying and calling the `unset` function. | [omit](reference/compat/object/omit.md) |
| omitBy | This `omitBy` function is relatively slow due to array-like object checking, `iteratee` conversion, and key transformation processes. | [omitBy](reference/compat/object/omitBy.md) |
| pick | This `pick` function is relatively slow due to complex path processing, calling `get`/`set` functions, and handling `null`/`undefined`. | [pick](reference/compat/object/pick.md) |
| pickBy | This `pickBy` function is relatively slow due to array-like object checking, `iteratee` conversion, and key transformation processes. | [pickBy](reference/compat/object/pickBy.md) |
| property | This `property` function is a wrapper function that internally calls the `get` function, causing additional function call overhead. | [property](reference/compat/object/property.md) |
| propertyOf | This `propertyOf` function is a wrapper function that internally calls the `get` function, causing additional function call overhead. | [propertyOf](reference/compat/object/propertyOf.md) |
| result | This `result` function performs slowly due to complex path handling and function invocation logic. | [result](reference/compat/object/result.md) |
| set | This `set` function internally calls the `updateWith` function and operates slowly due to complex path processing and object creation logic. | [set](reference/compat/object/set.md) |
| setWith | This `setWith` function internally calls the `updateWith` function and operates slowly due to complex path processing and customizer logic. | [setWith](reference/compat/object/setWith.md) |
| toDefaulted | This `toDefaulted` function operates slowly due to deep cloning and complex default value handling. | [toDefaulted](reference/compat/object/toDefaulted.md) |
| toPairs | This `toPairs` function operates slowly due to complex logic for handling `Map` and `Set`, array-like object processing, etc. | [toPairs](reference/compat/object/toPairs.md) |
| toPairsIn | This `toPairsIn` function operates slowly due to complex logic for handling inherited properties, `Map` and `Set` processing, etc. | [toPairsIn](reference/compat/object/toPairsIn.md) |
| transform | This `transform` function operates slowly due to complex internal logic. In most cases, it can be implemented more simply using JavaScript's built-in methods. | [transform](reference/compat/object/transform.md) |
| unset | This `unset` function operates slowly due to complex path parsing and nested object handling. | [unset](reference/compat/object/unset.md) |
| update | This `update` function operates slowly due to complex path parsing and nested object creation logic. | [update](reference/compat/object/update.md) |
| updateWith | This `updateWith` function operates slowly due to complex path parsing and customizer handling. | [updateWith](reference/compat/object/updateWith.md) |
| values | This `values` function simply calls `Object.values` with unnecessary overhead. | [values](reference/compat/object/values.md) |
| valuesIn | This `valuesIn` function operates slowly due to complex logic for processing prototype properties. | [valuesIn](reference/compat/object/valuesIn.md) |
| camelCase | This `camelCase` function operates slower due to handling non-string input values and removing contracted apostrophes. | [camelCase](reference/compat/string/camelCase.md) |
| capitalize | This `capitalize` function operates slower due to handling non-string input values. | [capitalize](reference/compat/string/capitalize.md) |
| deburr | This `deburr` function operates slower due to handling non-string input values. | [deburr](reference/compat/string/deburr.md) |
| endsWith | This `endsWith` function operates slower due to handling `null` or `undefined`. | [endsWith](reference/compat/string/endsWith.md) |
| escape | This `escape` function operates slower due to handling non-string input values. | [escape](reference/compat/string/escape.md) |
| escapeRegExp | This `escapeRegExp` function operates slower due to handling non-string input values. | [escapeRegExp](reference/compat/string/escapeRegExp.md) |
| kebabCase | This `kebabCase` function operates slower due to handling non-string input values and removing contracted apostrophes. | [kebabCase](reference/compat/string/kebabCase.md) |
| lowerCase | This `lowerCase` function operates slower due to handling non-string input values and removing contracted apostrophes. | [lowerCase](reference/compat/string/lowerCase.md) |
| lowerFirst | This `lowerFirst` function operates slower due to handling non-string input values. | [lowerFirst](reference/compat/string/lowerFirst.md) |
| pad | This `pad` function operates slower due to handling `null` or `undefined`. | [pad](reference/compat/string/pad.md) |
| padEnd | This `padEnd` function operates slower due to handling non-string values. | [padEnd](reference/compat/string/padEnd.md) |
| padStart | This `padStart` function operates slower due to handling non-string values. | [padStart](reference/compat/string/padStart.md) |
| repeat | This `repeat` function operates slower due to handling non-string values and integer conversion. | [repeat](reference/compat/string/repeat.md) |
| replace | This `replace` function operates slower due to handling non-string values. | [replace](reference/compat/string/replace.md) |
| snakeCase | This `snakeCase` function operates slowly due to normalization logic for handling `null` or `undefined`. | [snakeCase](reference/compat/string/snakeCase.md) |
| split | This `split` function operates slowly due to handling `null` or `undefined`. | [split](reference/compat/string/split.md) |
| startCase | This `startCase` function runs slower due to normalization logic for handling `null` or `undefined`. | [startCase](reference/compat/string/startCase.md) |
| startsWith | This `startsWith` function is slower due to handling `null` or `undefined`. | [startsWith](reference/compat/string/startsWith.md) |
| template | This `template` function operates slowly due to complex string processing. | [template](reference/compat/string/template.md) |
| toLower | This `toLower` function operates slowly due to handling non-string values. | [toLower](reference/compat/string/toLower.md) |
| toUpper | This `toUpper` function performs slower due to handling non-string values. | [toUpper](reference/compat/string/toUpper.md) |
| trim | This `trim` function operates slowly due to handling `null` or `undefined` and array-type `chars`. | [trim](reference/compat/string/trim.md) |
| trimEnd | This `trimEnd` function operates slowly due to handling `null` or `undefined` and parameter order changes. | [trimEnd](reference/compat/string/trimEnd.md) |
| trimStart | This `trimStart` function operates slowly due to handling `null` or `undefined` and parameter order changes. | [trimStart](reference/compat/string/trimStart.md) |
| truncate | This `truncate` function operates slowly due to complex Unicode handling and regex checking. | [truncate](reference/compat/string/truncate.md) |
| unescape | This `unescape` function operates slowly due to conversion logic for handling `null` or `undefined`. | [unescape](reference/compat/string/unescape.md) |
| upperCase | This `upperCase` function operates slowly due to normalization logic for handling `null` or `undefined`. | [upperCase](reference/compat/string/upperCase.md) |
| upperFirst | This `upperFirst` function operates slowly due to conversion logic for handling `null` or `undefined`. | [upperFirst](reference/compat/string/upperFirst.md) |
| words | This `words` function operates slowly due to handling `null` or `undefined` and complex Unicode support. | [words](reference/compat/string/words.md) |
| conforms | Creates a function that checks if an object satisfies all the conditions defined in the given predicate object. | [conforms](reference/compat/predicate/conforms.md) |
| conformsTo | Checks if an object satisfies all given condition functions. | [conformsTo](reference/compat/predicate/conformsTo.md) |
| isArguments | Checks if a value is an arguments object. | [isArguments](reference/compat/predicate/isArguments.md) |
| isArray | This `isArray` function operates slowly due to additional function calls. | [isArray](reference/compat/predicate/isArray.md) |
| isArrayBuffer | This `isArrayBuffer` function operates slowly due to complex handling for Lodash compatibility. | [isArrayBuffer](reference/compat/predicate/isArrayBuffer.md) |
| isArrayLike | Checks if a value is an array-like object. | [isArrayLike](reference/compat/predicate/isArrayLike.md) |
| isArrayLikeObject | Checks if a value is an array-like object that is not a primitive. | [isArrayLikeObject](reference/compat/predicate/isArrayLikeObject.md) |
| isBoolean | This `isBoolean` function is complex due to handling Boolean object wrappers. | [isBoolean](reference/compat/predicate/isBoolean.md) |
| isBuffer | This `isBuffer` function operates slowly due to complex processing for Lodash compatibility. | [isBuffer](reference/compat/predicate/isBuffer.md) |
| isDate | This `isDate` function operates slowly due to complex processing for Lodash compatibility. | [isDate](reference/compat/predicate/isDate.md) |
| isElement | This `isElement` function performs structural checks which can be inaccurate and slow. | [isElement](reference/compat/predicate/isElement.md) |
| isEmpty | Checks if a given value is empty. | [isEmpty](reference/compat/predicate/isEmpty.md) |
| isEqual | This `isEqual` function operates slowly due to complex handling for Lodash compatibility. | [isEqual](reference/compat/predicate/isEqual.md) |
| isEqualWith | This `isEqualWith` function operates slowly due to complex processing for Lodash compatibility. | [isEqualWith](reference/compat/predicate/isEqualWith.md) |
| isError | This `isError` function operates slowly due to complex handling for Lodash compatibility. | [isError](reference/compat/predicate/isError.md) |
| isFinite | This `isFinite` function operates slowly due to additional type checking overhead. | [isFinite](reference/compat/predicate/isFinite.md) |
| isFunction | This `isFunction` function operates slowly due to complex handling for Lodash compatibility. | [isFunction](reference/compat/predicate/isFunction.md) |
| isInteger | This `isInteger` function operates slowly due to additional type checking overhead. | [isInteger](reference/compat/predicate/isInteger.md) |
| isLength | This `isLength` function operates slowly due to complex handling for Lodash compatibility. | [isLength](reference/compat/predicate/isLength.md) |
| isMap | This `isMap` function operates slowly due to complex handling for Lodash compatibility. | [isMap](reference/compat/predicate/isMap.md) |
| isMatch | Checks if an object partially matches another object's shape and values. | [isMatch](reference/compat/predicate/isMatch.md) |
| isMatchWith | Checks if an object partially matches using a custom comparison function. | [isMatchWith](reference/compat/predicate/isMatchWith.md) |
| isNaN | This `isNaN` function operates slowly due to additional function calls. | [isNaN](reference/compat/predicate/isNaN.md) |
| isNative | Checks if a value is a native function of the JavaScript engine. | [isNative](reference/compat/predicate/isNative.md) |
| isNil | This `isNil` function operates slowly due to complex handling for Lodash compatibility. | [isNil](reference/compat/predicate/isNil.md) |
| isNull | This `isNull` function is a Lodash compatibility function, but has the same implementation as the main library. | [isNull](reference/compat/predicate/isNull.md) |
| isNumber | This `isNumber` function is complex due to handling Number object wrappers. | [isNumber](reference/compat/predicate/isNumber.md) |
| isObject | Checks if a value is an object. | [isObject](reference/compat/predicate/isObject.md) |
| isObjectLike | Checks if a value is object-like. | [isObjectLike](reference/compat/predicate/isObjectLike.md) |
| isPlainObject | This `isPlainObject` function operates slowly due to complex handling for Lodash compatibility. | [isPlainObject](reference/compat/predicate/isPlainObject.md) |
| isRegExp | This `isRegExp` function is a Lodash compatibility function, but is a simple type check. | [isRegExp](reference/compat/predicate/isRegExp.md) |
| isSafeInteger | This `isSafeInteger` function operates slowly due to additional type checking overhead. | [isSafeInteger](reference/compat/predicate/isSafeInteger.md) |
| isSet | This `isSet` function is a Lodash compatibility function, but has the same implementation as the main library. | [isSet](reference/compat/predicate/isSet.md) |
| isString | This `isString` function is complex due to String object wrapper handling. | [isString](reference/compat/predicate/isString.md) |
| isSymbol | This `isSymbol` function is complex due to Symbol object wrapper handling. | [isSymbol](reference/compat/predicate/isSymbol.md) |
| isTypedArray | This `isTypedArray` function is a Lodash compatibility function, but is a simple type check. | [isTypedArray](reference/compat/predicate/isTypedArray.md) |
| isUndefined | This `isUndefined` function operates slowly due to complex handling for Lodash compatibility. | [isUndefined](reference/compat/predicate/isUndefined.md) |
| isWeakMap | This `isWeakMap` function is a Lodash compatibility function, but is a simple type check. | [isWeakMap](reference/compat/predicate/isWeakMap.md) |
| isWeakSet | This `isWeakSet` function is a Lodash compatibility function, but is a simple type check. | [isWeakSet](reference/compat/predicate/isWeakSet.md) |
| matches | Creates a function that checks for partial matching with a given pattern. | [matches](reference/compat/predicate/matches.md) |
| matchesProperty | Creates a function that checks if a specific property matches a given value. | [matchesProperty](reference/compat/predicate/matchesProperty.md) |
| bindAll | Binds methods of an object to the object itself. | [bindAll](reference/compat/util/bindAll.md) |
| cond | This `cond` function performs slowly due to complex iteratee processing, array transformations, and function validation. | [cond](reference/compat/util/cond.md) |
| constant | This `constant` function creates an unnecessary function wrapper for simple tasks, which creates unnecessary overhead. | [constant](reference/compat/util/constant.md) |
| defaultTo | Returns the default value for values that are `null`, `undefined`, or `NaN`. | [defaultTo](reference/compat/util/defaultTo.md) |
| eq | Checks if two values are equivalent using SameValueZero comparison. | [eq](reference/compat/util/eq.md) |
| gt | This `gt` function performs slower due to additional processing like `toNumber` function calls and string type checking. | [gt](reference/compat/util/gt.md) |
| gte | This `gte` function performs slower due to additional processing like `toNumber` function calls and string type checking. | [gte](reference/compat/util/gte.md) |
| invoke | This `invoke` function performs slower due to complex processing like path resolution, object traversal, and `get` function calls. | [invoke](reference/compat/util/invoke.md) |
| iteratee | This `iteratee` function performs slowly due to complex type conversions and handling of various cases. | [iteratee](reference/compat/util/iteratee.md) |
| lt | This `lt` function performs slower due to additional processing like `toNumber` function calls and string type checking. | [lt](reference/compat/util/lt.md) |
| lte | This `lte` function performs slower due to additional processing like `toNumber` function calls and string type checking. | [lte](reference/compat/util/lte.md) |
| method | Creates a function that invokes a method at the specified path with the given arguments. | [method](reference/compat/util/method.md) |
| methodOf | Creates a function that takes a path and invokes a method on the given object with predefined arguments. | [methodOf](reference/compat/util/methodOf.md) |
| now | This `now` function is a simple wrapper that calls `Date.now()` and represents unnecessary abstraction. | [now](reference/compat/util/now.md) |
| over | This `over` function incurs additional overhead in the process of mapping functions to arrays. | [over](reference/compat/util/over.md) |
| overEvery | This `overEvery` function incurs additional overhead in the process of converting and checking predicate functions. | [overEvery](reference/compat/util/overEvery.md) |
| overSome | This `overSome` function incurs additional overhead in the process of converting and checking predicate functions. | [overSome](reference/compat/util/overSome.md) |
| stubArray | This `stubArray` function is a simple wrapper that returns an empty array and represents unnecessary abstraction. | [stubArray](reference/compat/util/stubArray.md) |
| stubFalse | This `stubFalse` function is a simple wrapper that returns `false` and represents unnecessary abstraction. | [stubFalse](reference/compat/util/stubFalse.md) |
| stubObject | This `stubObject` function is a simple wrapper that returns an empty object and represents unnecessary abstraction. | [stubObject](reference/compat/util/stubObject.md) |
| stubString | This `stubString` function is a simple wrapper that returns an empty string and represents unnecessary abstraction. | [stubString](reference/compat/util/stubString.md) |
| stubTrue | This `stubTrue` function performs slowly due to unnecessary function calls. | [stubTrue](reference/compat/util/stubTrue.md) |
| times | Executes a function the given number of times and returns the results as an array. | [times](reference/compat/util/times.md) |
| toArray | This `toArray` function performs slowly due to complex type validation and handling of various inputs. | [toArray](reference/compat/util/toArray.md) |
| toFinite | Converts a value to a finite number. | [toFinite](reference/compat/util/toFinite.md) |
| toInteger | Converts a value to an integer. | [toInteger](reference/compat/util/toInteger.md) |
| toLength | Converts a value to a valid array index. | [toLength](reference/compat/util/toLength.md) |
| toNumber | This `toNumber` function performs slowly due to symbol type validation and additional processing. | [toNumber](reference/compat/util/toNumber.md) |
| toPath | Converts a deep key string to a path array. | [toPath](reference/compat/util/toPath.md) |
| toPlainObject | This `toPlainObject` function performs slowly due to complex prototype handling and key enumeration. | [toPlainObject](reference/compat/util/toPlainObject.md) |
| toSafeInteger | Converts a value to a safe integer. | [toSafeInteger](reference/compat/util/toSafeInteger.md) |
| toString | This `toString` function performs slowly due to complex array handling and -0 special case processing. | [toString](reference/compat/util/toString.md) |
| uniqueId | When generating unique identifiers, using crypto.randomUUID() is a safer and more standard approach. | [uniqueId](reference/compat/util/uniqueId.md) |
