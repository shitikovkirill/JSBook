QUnit.test( "Let:", function( assert ) {
    var name = "test old";

    {
        let name ="test new";
        assert.ok( name == "test new");
    }

    assert.ok( name == "test old");
});


QUnit.test( "Let: podem", function( assert ) {
    assert.ok( name == undefined);
    var name = "test old";

    assert.throws( function () {
        {
            name = 3;
            let name ="test new";
        }
    }, ReferenceError, 'You can not get var before let');
});

QUnit.test( "Let: get var out of scope", function( assert ) {
    assert.throws( function () {
        {
            let name ="test new";
            assert.ok(name == "test new")
        }
        name == "test new"
    }, ReferenceError, 'You can not get var before let');

    {
        var name2 ="test new";
    }
    name2 == "test new";
    assert.ok(name2 == "test new")
});

QUnit.test( "Let: for with var", function( assert ) {
    assert.ok( a == undefined);
    for (var a=0; a < 10;a++){
        assert.ok( a < 10);
    }
});

QUnit.test( "Let: for with let", function( assert ) {
    assert.throws( function () {
        a == undefined
        for (let a=0; a < 10;a++){
            assert.ok(a < 10);
        }
    }, ReferenceError, 'You can not get var before let');
});

QUnit.test( "Let: for and closure", function( assert ) {
    funcs = [];

    for (let a = 0; a < 10; a++){
        funcs.push(function () {
            return a
        })
    }

    assert.equal( funcs[0](), 0);
    assert.equal( funcs[3](), 3);

});

QUnit.test( "Let: var and for and closure", function( assert ) {
    var funcs = [];

    for (var a = 0; a < 10; a++){
        funcs.push(function () {
            return a
        })
    }

    assert.equal( funcs[0](), 10);
    assert.equal( funcs[3](), 10);

});