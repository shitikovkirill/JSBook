QUnit.test( "Arrow function: this call applay", function( assert ) {
    var a = ['a', 'b', 'c', 'd', 'e'];

    var temp1 = [];
    for (var idx in a) {
        temp1.push(idx);
        a[idx]
    }
    assert.deepEqual(temp1, ["0","1","2","3","4"]);

    var temp2 = [];
    for (var val of a) {
        temp2.push(val)
    }

    assert.deepEqual(temp2, ['a','b','c','d','e']);
});

