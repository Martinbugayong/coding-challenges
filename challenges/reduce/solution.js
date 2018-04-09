function reduce(arr, cb, initialValue) {
    let accumulator =  (typeof initialValue === 'undefined') ? undefined : initialValue;
    arr.forEach(function(elem) {
        if (accumulator !== undefined) {
            accumulator = cb(accumulator, elem);
        } else {
            accumulator = elem;
        }
    })
    return accumulator;
}