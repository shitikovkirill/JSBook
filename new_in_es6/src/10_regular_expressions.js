
/𝌆/.test('foo𝌆bar');
/𝌆/u.test('foo𝌆bar');

/foo.bar/.test('foo𝌆bar');
/foo.bar/u.test('foo𝌆bar');

// -----------------------

var re1=/foo/y,
    str = '++foo++';

re1.lastIndex;
re1.test(str);
re1.lastIndex;

re1.lastIndex;
re1.test(str);
re1.lastIndex;