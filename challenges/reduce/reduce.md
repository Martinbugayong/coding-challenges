## reduce

**Difficulty**: Medium 

## Prompt 

Implement a function called `reduce` that takes three arguments: 

1. An array 
2. A callback function - this function takes an accumulator and an array element as argument
3. Initial value (this will be optional)

This function should *reduce* an array to a single value.

It should behave similar to JavaScript's  native `reduce` function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.

## Examples

```js 
reduce([1,2,3], function(accum, elem) { 
    return accum + elem;
}) //=> 6

reduce([1,11], function(accum, elem) { 
    return accum + elem;
}, 5) //=> 17
```