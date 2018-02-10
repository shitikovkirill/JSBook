QUnit.test( "Generator:", function( assert ) {
    function *foo(){
        var x = 10;
        var y = 20;

        yield;

        var z = x + y;
    }

    var it = foo();

    assert.propEqual(it.next(), {value: undefined, done: false});
});

QUnit.test( "Generator: infinity loop", function( assert ) {
    function *foo(){
        let i = 1;
        while (true){
            yield i++;
        }
    }

    var it = foo();

    assert.propEqual(it.next(), {value: 1, done: false});
    assert.propEqual(it.next(), {value: 2, done: false});
    assert.propEqual(it.next(), {value: 3, done: false});
});

QUnit.test( "Generator: return value", function( assert ) {
    function *foo(){
        var x = yield 10;
        assert.equal(x, 10);
    }

    var it = foo();

    assert.propEqual(it.next(), {value: 10, done: false});
});

QUnit.test( "Generator: priority", function( assert ) {
    function *foo(){
        var a;
        yield 3;
        // a = 2 + yield 3; // SyntaxError: Unexpected number
        a = 2 + (yield 3);
        yield 2 + 3;
        (yield 2) + 3;
    }

    var it = foo();

    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 5, done: false});
    assert.propEqual(it.next(), {value: 2, done: false});
});

QUnit.test( "Generator: priority", function( assert ) {
    function *foo(){
        var a;
        yield 3;
        // a = 2 + yield 3; // SyntaxError: Unexpected number
        a = 2 + (yield 3);
        yield 2 + 3;
        (yield 2) + 3;
    }

    var it = foo();

    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 5, done: false});
    assert.propEqual(it.next(), {value: 2, done: false});
});

QUnit.test( "Generator: * ", function( assert ) {
    function *foo(){
        yield *[1,2,3,4]
    }

    var it = foo();

    assert.propEqual(it.next(), {value: 1, done: false});
    assert.propEqual(it.next(), {value: 2, done: false});
    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 4, done: false});
});

QUnit.test( "Generator: * ", function( assert ) {
    function *foo(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }

    function *bar() {
        yield *foo();
    }

    var it = bar();

    assert.propEqual(it.next(), {value: 1, done: false});
    assert.propEqual(it.next(), {value: 2, done: false});
    assert.propEqual(it.next(), {value: 3, done: false});
    assert.propEqual(it.next(), {value: 4, done: false});
});