QUnit.test( "let", function( assert ) {
    var name = "test old";

    {
        let name ="test new";
        assert.ok( name == "test new");
    }

    assert.ok( name == "test old");
});


QUnit.test( "let 2", function( assert ) {
    assert.ok( name == undefined);
    var name = "test old";

    {
        //assert.throws( name, ReferenceError);
        let name ="test new";
    }
});

QUnit.test( "let and for", function( assert ) {
    assert.ok( a == undefined);
    for (var a=0; a < 10;a++){
        assert.ok( a < 10);
    }

    //assert.throws( name, ReferenceError);
    for (let a=0; a < 10;a++){
        assert.ok( a < 10);
    }
});

QUnit.test( "let and for and closure", function( assert ) {
    funcs = [];

    for (let a = 0; a < 10; a++){
        funcs.push(function () {
            return a
        })
    }

    assert.equal( funcs[0](), 0);
    assert.equal( funcs[3](), 3);

});

QUnit.test( "var and for and closure", function( assert ) {
    funcs = [];

    for (var a = 0; a < 10; a++){
        funcs.push(function () {
            return a
        })
    }

    assert.equal( funcs[0](), 10);
    assert.equal( funcs[3](), 10);

});