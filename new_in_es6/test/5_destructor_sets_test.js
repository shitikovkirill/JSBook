function foo(){
    return [1,2,3]
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}

QUnit.test( "Destructor: array", function( assert ) {

    var [a,b,c] = foo();

    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.equal(c, 3);
});

QUnit.test( "Destructor: object", function( assert ) {

    let temp = bar();

    let x1 = temp.x;
    let y1 = temp.y;
    let z1 = temp.z;

    assert.equal(x1, 4);
    assert.equal(y1, 5);
    assert.equal(z1, 6);

    var {x:x2, y:y2, z:z2} = bar();

    assert.equal(x2, 4);
    assert.equal(y2, 5);
    assert.equal(z2, 6);

    var {x, y, z} = bar();

    assert.equal(x, 4);
    assert.equal(y, 5);
    assert.equal(z, 6);
});

QUnit.test( "Destructor: association", function( assert ) {

    var o = {};
    [o.a, o.b, o.c] = foo();

    ({x: o.x, y: o.y, z: o.z} = bar());

    assert.deepEqual( o, { a: 1, b: 2, c: 3, x: 4, y: 5, z: 6 });

});

QUnit.test( "Destructor: 1", function( assert ) {

    var y = {};
    ({x: y.x} = {x: 4, y: 5, z: 6});
    assert.deepEqual( y, { x: 4 });

    var which='x', o={};
    ({[which]: o[which]} = bar());

    assert.deepEqual( o, { x: 4 });

});

QUnit.test( "Destructor: 2", function( assert ) {

    var x=10, y=20;
    [y,x]=[x,y];

    assert.equal( x, 20);
    assert.equal( y, 10);

});

QUnit.test( "Destructor: 3", function( assert ) {

    var {a: X, a:Y} = {a:1};
    ({a:{x:X, x:Y}, a} = {a: {x: 1}});

    assert.equal( X, 1);
    assert.equal( Y, 1);
    assert.deepEqual( a, {x: 1});

});

QUnit.test( "Destructor: 4", function( assert ) {

    ({a: X, a: Y, a:[Z]} = {a:[1]});

    assert.deepEqual( X, [1]);
    assert.deepEqual( Y, [1]);
    assert.deepEqual( Z, 1);

    X.push(2);
    Y[0]=10;


    assert.deepEqual( X, [10,2]);
    assert.deepEqual( Y, [10,2]);
    assert.deepEqual( Z, 1);
});

QUnit.test( "Destructor: 5", function( assert ) {

    var v = [2,3,4];
    var [b, ...c] = v;

    assert.equal( b, 2);
    assert.deepEqual( c, [3,4]);

});

QUnit.test( "Destructor: 6", function( assert ) {
    var c=9;
    var [a=3, b=6, c, d=12] = [1,2,3];
    var {x=5, y=10, z=15, w:WW=20} = {x: 4, y: 5, z: 6};

    assert.equal( a, 1);
    assert.equal( b, 2);
    assert.equal( c, 3);
    assert.equal( d, 12);

    assert.equal( x, 4);
    assert.equal( y, 5);
    assert.equal( z, 6);
    assert.equal( WW, 20);

});

QUnit.test( "Destructor: 6", function( assert ) {
    function dfoo([x,y,...z],...w) {
        return [x,y,z,w]
    }

    assert.deepEqual( dfoo([]), [undefined,undefined,[],[]]);
    assert.deepEqual( dfoo([1,2,3,4],5,6), [1,2,[3,4],[5,6]]);

});
