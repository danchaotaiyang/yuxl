
let arr = [6, 9, 11, 15, 18];

function aryIndexOf(ary, val) {
    for (var i = 0; i < ary.length; i++) {
        var curr = i;
        var next = i + 1;
        if (ary[curr] < val && ary[next] >= val) {
            return next;
        }
    }
}

function insert(ary, val) {
    console.time('b');
    if (val <= ary[0]) {
        ary.unshift(val);
    } else if (val > ary[ary.length - 1]) {
        ary.push(val);
    } else {
        ary.splice(aryIndexOf(ary, val), 0, val);
    }
    console.timeEnd('b');
    return ary;
}


function insert2(ary, val) {
    console.time('a');
    for (var i = 0; i < ary.length; i++) {
        var curr = i;
        var next = i + 1;
        if (curr === 0 && val <= ary[curr]) {
            ary.unshift(val);
        } else if (curr === ary.length - 1 && val > ary[ary.length - 1]) {
            ary.push(val);
        } else if (ary[curr] < val && ary[next] >= val) {
            ary.splice(next, 0, val);
        }
    }
    console.timeEnd('a');

    return ary;
}
