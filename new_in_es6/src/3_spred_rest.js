function foo(x,y,z) {
    return x+y+z;
}

foo(...[1,2,3]);

// ------------------

let a = [1,2,3];

[1,2,3, ...a];

// -------------------

function foo(...args) {
    return args;
}
foo(1,2,3,4,3,2);