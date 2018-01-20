QUnit.test( "Spread: in function", function( assert ) {
    function foo(x,y,z) {
        return x+y+z;
    }

    assert.equal(foo(...[1,2,3]), 6);

    assert.equal(foo.apply(null,[1,2,3]), 6);
});

QUnit.test( "Spread: in array", function( assert ) {
    let a = [1,2,3];

    assert.equal([1,2,3, a].length, 4);
    assert.deepEqual([1,2,3, a], [1,2,3,[1,2,3]]);

    assert.equal([1,2,3, ...a].length, 6);
    assert.deepEqual([1,2,3, ...a], [1,2,3,1,2,3]);

    assert.equal([1,2,3].concat(a).length, 6);
});

QUnit.test( "Rest: function", function( assert ) {
    function foo(...args) {
        assert.deepEqual(args, [1,2,3,4,3,2]);
        return args;
    }
    assert.equal(foo(1,2,3,4,3,2).length, 6);

    function fee() {
        "use strict";
        return arguments;
    }

    assert.equal(fee(1,2,3,4,3,2).length, 6);
    assert.deepEqual(fee(1,2,3,4,3,2), {"0": 1, "1": 2, "2": 3, "3": 4, "4": 3, "5": 2});
});