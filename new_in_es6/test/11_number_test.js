QUnit.test( "Numbers", function( assert ) {
    // Old
    var dec = 42,
    oct = 052,
    hex = 0x2a;
    assert.equal(dec, oct);
    assert.equal(dec, hex);

    assert.equal(dec.toString(), "42");
    assert.equal(oct.toString(), "42");
    assert.equal(hex.toString(), "42");

    assert.equal(Number("42"), 42);
    assert.equal(Number("052"), 52);
    assert.equal(Number("0x2a"), 42);

    // New
    var dec = 42,
    oct = 0o52,
    hex = 0x2a,
    bin = 0b101010;

    assert.equal(dec.toString(), "42");
    assert.equal(oct.toString(), "42");
    assert.equal(hex.toString(), "42");
    assert.equal(bin.toString(), "42");

    assert.equal(Number("42"), 42);
    assert.equal(Number("0o52"), 42);
    assert.equal(Number("0x2a"), 42);
    assert.equal(Number("0b101010"), 42);

    assert.equal(dec.toString(), "42");
    assert.equal(dec.toString(8), "52");
    assert.equal(dec.toString(16), "2a");
    assert.equal(dec.toString(2), "101010");
});
