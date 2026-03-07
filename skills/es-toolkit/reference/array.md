
# Array Utilities

This page lists all array utilities available in es-toolkit.
| Name | Description | Link |
| --- | --- | --- |
| at | Gets the elements at specified indices from an array and returns a new array. | [at](reference/array/at.md) |
| chunk | Splits an array into smaller arrays of a specified size. | [chunk](reference/array/chunk.md) |
| compact | Returns a new array with falsy values removed. | [compact](reference/array/compact.md) |
| countBy | Categorizes the elements of an array based on a transformation function result and returns an object with counts. | [countBy](reference/array/countBy.md) |
| difference | Returns a new array excluding elements from the first array that are in the second array. | [difference](reference/array/difference.md) |
| differenceBy | Transforms elements of two arrays with a conversion function, computes their difference, and returns a new array. | [differenceBy](reference/array/differenceBy.md) |
| differenceWith | Computes the difference of two arrays using a custom comparison function and returns a new array. | [differenceWith](reference/array/differenceWith.md) |
| drop | Returns a new array with the specified number of elements removed from the beginning. | [drop](reference/array/drop.md) |
| dropRight | Returns a new array with the specified number of elements removed from the end. | [dropRight](reference/array/dropRight.md) |
| dropRightWhile | Returns a new array with elements removed from the end while a condition is satisfied. | [dropRightWhile](reference/array/dropRightWhile.md) |
| dropWhile | Returns a new array with elements removed from the beginning while a condition is satisfied. | [dropWhile](reference/array/dropWhile.md) |
| fill | Fills array elements with a specified value. Modifies the original array directly. | [fill](reference/array/fill.md) |
| filterAsync | Filters an array using an async predicate function and returns a new array containing only the elements that satisfy the condition. | [filterAsync](reference/array/filterAsync.md) |
| flatMap | Transforms each element of an array with a function's return value, then flattens to a specified depth and returns a new array. | [flatMap](reference/array/flatMap.md) |
| flatMapAsync | Transforms each element in an array using an async function and flattens the result by one level to return a new array. | [flatMapAsync](reference/array/flatMapAsync.md) |
| flatMapDeep | Transforms each element of an array with a function's return value, then flattens all depths and returns a new array. | [flatMapDeep](reference/array/flatMapDeep.md) |
| flatten | Returns a new array that is flattened to the specified depth. | [flatten](reference/array/flatten.md) |
| flattenDeep | Returns a new array with all depths of a nested array flattened. | [flattenDeep](reference/array/flattenDeep.md) |
| forEachAsync | Executes an async function for each element in an array. | [forEachAsync](reference/array/forEachAsync.md) |
| forEachRight | Iterates over the elements of an array from right to left, executing a function for each element. | [forEachRight](reference/array/forEachRight.md) |
| groupBy | Returns a new object with array elements grouped according to a key-generating function. | [groupBy](reference/array/groupBy.md) |
| head | Returns the first element of an array. | [head](reference/array/head.md) |
| initial | Returns a new array containing all elements except the last one. | [initial](reference/array/initial.md) |
| intersection | Returns a new array containing elements that are commonly included in both arrays. | [intersection](reference/array/intersection.md) |
| intersectionBy | Returns a new array containing the intersection of two arrays based on the result of a transformation function. | [intersectionBy](reference/array/intersectionBy.md) |
| intersectionWith | Returns a new array containing the intersection of two arrays based on a custom comparison function. | [intersectionWith](reference/array/intersectionWith.md) |
| isSubset | Checks if one array is a subset of another array. | [isSubset](reference/array/isSubset.md) |
| isSubsetWith | Checks if one array is a subset of another array based on a custom comparison function. | [isSubsetWith](reference/array/isSubsetWith.md) |
| keyBy | Returns a new object with array elements converted to key-value pairs using a key-generating function. | [keyBy](reference/array/keyBy.md) |
| last | Returns the last element of an array. | [last](reference/array/last.md) |
| limitAsync | Creates a new function that limits the maximum number of concurrent executions of an async function. | [limitAsync](reference/array/limitAsync.md) |
| mapAsync | Transforms each element in an array using an async function and returns a new array. | [mapAsync](reference/array/mapAsync.md) |
| maxBy | Returns the element with the maximum value from the array based on the value returned by the transformation function. | [maxBy](reference/array/maxBy.md) |
| minBy | Returns the element with the minimum value from the array based on the value returned by the transformation function. | [minBy](reference/array/minBy.md) |
| orderBy | Returns a new array sorted by multiple criteria and sort directions. | [orderBy](reference/array/orderBy.md) |
| partition | Returns a tuple that splits an array into two groups based on a condition. | [partition](reference/array/partition.md) |
| pull | Removes all specified values from an array. | [pull](reference/array/pull.md) |
| pullAt | Removes elements at specified indices from an array and returns the removed elements. | [pullAt](reference/array/pullAt.md) |
| reduceAsync | Reduces an array to a single value using an async reducer function. | [reduceAsync](reference/array/reduceAsync.md) |
| remove | Removes elements from an array based on a condition function and returns the removed elements in a new array. It modifies the original array directly. | [remove](reference/array/remove.md) |
| sample | Returns a randomly selected element from an array. | [sample](reference/array/sample.md) |
| sampleSize | Returns a new array of randomly selected elements with the specified size. | [sampleSize](reference/array/sampleSize.md) |
| shuffle | Returns a new array with the elements randomly shuffled. | [shuffle](reference/array/shuffle.md) |
| sortBy | Returns a new array sorted in ascending order by the given criteria. | [sortBy](reference/array/sortBy.md) |
| tail | Returns a new array consisting of all elements except the first. | [tail](reference/array/tail.md) |
| take | Creates a new array by taking the specified number of elements from the beginning of the array. | [take](reference/array/take.md) |
| takeRight | Creates a new array by taking the specified number of elements from the end of the array. | [takeRight](reference/array/takeRight.md) |
| takeRightWhile | Returns a new array by taking elements from the end of the array while the condition function returns true. | [takeRightWhile](reference/array/takeRightWhile.md) |
| takeWhile | Creates a new array by taking elements from the beginning of the array while the condition function returns true. | [takeWhile](reference/array/takeWhile.md) |
| toFilled | Creates a new array by filling part or all of it with the specified value. | [toFilled](reference/array/toFilled.md) |
| union | Creates a new array containing all unique elements from two arrays. | [union](reference/array/union.md) |
| unionBy | Creates a new array containing unique elements from two arrays based on values transformed by a specific function. | [unionBy](reference/array/unionBy.md) |
| unionWith | Creates a new array containing unique elements from two arrays based on a custom equality function. | [unionWith](reference/array/unionWith.md) |
| uniq | Returns a new array with duplicate elements removed. | [uniq](reference/array/uniq.md) |
| uniqBy | Returns a new array with duplicate elements removed based on values returned by the transformation function. | [uniqBy](reference/array/uniqBy.md) |
| uniqWith | Returns a new array with duplicate elements removed using a comparison function. | [uniqWith](reference/array/uniqWith.md) |
| unzip | Unpacks grouped arrays and creates new arrays by gathering elements at the same position. | [unzip](reference/array/unzip.md) |
| unzipWith | Unpacks grouped arrays and applies a transformation function to return a new array. | [unzipWith](reference/array/unzipWith.md) |
| windowed | Returns a new array containing snapshots of each window as a window of specified size slides regularly along the array. | [windowed](reference/array/windowed.md) |
| without | Creates a new array excluding specific values from the array. | [without](reference/array/without.md) |
| xor | Creates a new array with elements that exist in only one of two arrays. | [xor](reference/array/xor.md) |
| xorBy | Creates a new array with elements that exist in only one of two arrays, based on values transformed by a given function. | [xorBy](reference/array/xorBy.md) |
| xorWith | Creates a new array with elements that exist in only one of two arrays using a given comparison function. | [xorWith](reference/array/xorWith.md) |
| zip | Creates an array of tuples by bundling elements at the same index from multiple arrays. | [zip](reference/array/zip.md) |
| zipObject | Creates a single object from a keys array and a values array. | [zipObject](reference/array/zipObject.md) |
| zipWith | Creates a new array by combining multiple arrays using a custom function. | [zipWith](reference/array/zipWith.md) |
