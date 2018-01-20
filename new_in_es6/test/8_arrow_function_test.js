QUnit.test( "Arrow function: 1", function( assert ) {

	let f = () => 12;

    assert.equal(f(), 12)

});

QUnit.test( "Arrow function: 2", function( assert ) {

    let f = x => x*2;

    assert.equal(f(6), 12)

});

QUnit.test( "Arrow function: 3", function( assert ) {

    let f = (x, y) => {
        let z=x*2+y;
        y++;
        x*=3;
        return (x+y+z)/2;
    };

    assert.equal(f(6,3), 18.5)

});

QUnit.test( "Arrow function: 3", function( assert ) {

    var a = [1,2,3,4,5];
    a=a.map(v=>v*2);

    assert.deepEqual(a, [2,4,6,8,10])

});

