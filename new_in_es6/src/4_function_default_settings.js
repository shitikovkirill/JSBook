function foo(x=11, y=31){
    return x+y
}

foo(1);

function bar(val) {
    return y+val;
}

function foo2(x=y+3, z=bar(x)) {
    return [x, y]
}

var y = 5;
foo2();
foo2(10);

var y =6;
foo2(undefined, 10);