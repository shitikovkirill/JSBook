QUnit.test( "Unicode", function( assert ) {
    assert.ok(/𝌆/.test('foo𝌆bar'));
    assert.ok(/𝌆/u.test('foo𝌆bar'));

    assert.notOk(/foo.bar/.test('foo𝌆bar'));
    assert.ok(/foo.bar/u.test('foo𝌆bar'));
});

QUnit.test( "Sticky", function( assert ) {
    var re1=/foo/,
        str = '++foo++';

    assert.equal(re1.lastIndex, 0);
    assert.ok(re1.test(str));
    assert.equal(re1.lastIndex, 0);

    re1.lastIndex=2;
    assert.ok(re1.test(str));
    assert.equal(re1.lastIndex, 2);


    var re1=/foo/y,
        str = '++foo++';

    assert.equal(re1.lastIndex, 0);
    assert.notOk(re1.test(str));
    assert.equal(re1.lastIndex, 0);

    re1.lastIndex=2;
    assert.ok(re1.test(str));
    assert.equal(re1.lastIndex,5);

    assert.notOk(re1.test(str));
    assert.equal(re1.lastIndex,0);
});