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

QUnit.test( "Sticky: exampl 2", function( assert ) {
    var re=/f../y,
        str = 'foo far fad';

    assert.deepEqual(str.match(re), ["foo"]);

    re.lastIndex = 4;
    assert.deepEqual(str.match(re), ["far"]);
    re.lastIndex = 8;
    assert.deepEqual(str.match(re), ["fad"]);
});

QUnit.test( "Sticky: exampl 3", function( assert ) {
    var re=/\d+\.\s(.*?)(?:\s|$)/y,
        str = '1. foo 2. far 3. fad';

    assert.deepEqual(str.match(re), ["1. foo ","foo"]);

    assert.equal(re.lastIndex, 7);
    assert.deepEqual(str.match(re), ["2. far ","far"]);
    assert.equal(re.lastIndex, 14);
    assert.deepEqual(str.match(re), ["3. fad","fad"]);
});

QUnit.test( "Flags", function( assert ) {
    // Old
    var re=/foo/gi;
    var flags = re.toString().match(/\/([gim]*)$/)[1];

    assert.equal(flags, "gi");

    // New
    assert.equal(re.flags, "gi");
});
