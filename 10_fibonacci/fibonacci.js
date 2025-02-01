const fibonacci = function(n) {
    let c;
    if (typeof n!== 'number') {
        c = parseInt(n);
    } else {
        c = n;
    }
    //let c =(typeOf n !== 'number') ? parseInt(n) : n;

    if (c < 0) return "OOPS";
    if (c == 0) return 0;

    let f1 = 1;
    let f2 = 0;

    for (let i = 2; i <= c; i++) {
        let curr = f1 + f2;
        f2 = f1;
        f1 = curr;
    }

    return f1;

};

// Do not edit below this line
module.exports = fibonacci;
