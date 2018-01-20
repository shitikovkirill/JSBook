QUnit.test( "Function: default value", function( assert ) {
    function foo(x=11, y=31){
        return x+y
    }

    assert.equal(foo(1), 32);
});

QUnit.test( "Function: function as default value and closure", function( assert ) {


    function foo() {

        return y;
    }

    assert.throws( function () {
        foo();
    }, ReferenceError);

    let y = 5;
    assert.deepEqual(foo(), 5);

    y = 6;
    assert.equal(foo(), 6);
});

QUnit.test( "Function: function as default value and closure", function( assert ) {
    function bar(val) {
        return y+val;
    }

    function foo(x=y+3, z=bar(x)) {
        return [x, z]
    }

    var y = 5;
    assert.equal(typeof foo(),'object');
    assert.ok(Array.isArray(foo()));
    assert.equal(foo()[0], 8);
    assert.equal(foo()[1], 13);

    assert.equal(foo(10)[0], 10);
    assert.equal(foo(10)[1], 15);

    var y =6;
    foo(undefined, 10);
    assert.equal(foo(undefined, 10)[0], 9);
    assert.equal(foo(undefined, 10)[1], 10);
});

