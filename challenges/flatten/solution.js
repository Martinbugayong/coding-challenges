function flatten(arr) {
    let flattened = [];

    arr.forEach(function(elem) {
        if (Array.isArray(elem)) {
            
            let flat = true;

            while (flat) {
                flat = false;
                
                elem = elem.reduce(function(accum, currVal) {
                    return accum.concat(currVal) ;
                }, []);
    
                elem.forEach(function(elem) {
                    if (Array.isArray(elem)) {
                        flat = true;
                    }
                })
    
            }
        
        }

        flattened = flattened.concat(elem);
    })

    return flattened;

}

console.log(flatten([1, [[2], [[5]]], [[4], 5, [[[[10]]]]], 89]))