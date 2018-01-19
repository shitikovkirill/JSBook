QUnit.test( "Const: not define var", function( assert ) {

    assert.throws( function () {
        {
            // const b;
            const a = 2;
            a = 3
        }
    }, TypeError, 'You can not redefine var');
});

QUnit.test( "Const: array", function( assert ) {
    {
        const r = [1,2,3];
        r.push(5);
        assert.equal(r.length, 4);
    }
});