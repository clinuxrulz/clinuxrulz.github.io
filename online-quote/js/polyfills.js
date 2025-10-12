if (typeof Number.isFinite !== 'function') {
    Number.isFinite = function isFinite(value) {
        // 1. If Type(number) is not Number, return false.
        if (typeof value !== 'number') {
            return false;
        }
        // 2. If number is NaN, +∞, or −∞, return false.
        if (value !== value || value === Infinity || value === -Infinity) {
            return false;
        }
        // 3. Otherwise, return true.
        return true;
    };
}
if (!Math.trunc) {
    Math.trunc = function(v) {
        v = +v;
        if (!isFinite(v)) return v;
        
        return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
        
        // returns:
        //  0        ->  0
        // -0        -> -0
        //  0.2      ->  0
        // -0.2      -> -0
        //  0.7      ->  0
        // -0.7      -> -0
        //  Infinity ->  Infinity
        // -Infinity -> -Infinity
        //  NaN      ->  NaN
        //  null     ->  0
    };
}
if (Number.parseFloat === undefined) {
    Number.parseFloat = parseFloat;
}
