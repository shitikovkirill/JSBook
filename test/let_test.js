QUnit.test( "let", function( assert ) {
    var name = "test old";

    {
        let name ="test new";
        assert.ok( name == "test new");
    }

    assert.ok( name == "test old");
});