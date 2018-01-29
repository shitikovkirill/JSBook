QUnit.test( "Symbol", function( assert ) {

  var sym = Symbol("description");

  assert.throws( function () {
      var sym2 = new Symbol("description");
  }, TypeError, 'Symbol not a object');

  assert.equal(typeof sym, "symbol");
  assert.equal(sym.toString(), "Symbol(description)");

  assert.notOk(Symbol('foo') === Symbol('foo'));
  assert.ok(Symbol.for('foo') === Symbol.for('foo'));

  assert.equal(Symbol.keyFor(sym), undefined);
  var sym3 = Symbol.for("description");
  assert.equal(Symbol.keyFor(sym3), "description");

});

QUnit.test( "Symbol as object", function( assert ) {

  var sym = Symbol("description");

  assert.notOk(sym instanceof Symbol);
  var symObj = Object(sym);
  assert.ok(symObj instanceof Symbol);
  assert.ok(symObj.valueOf() === sym);
  assert.equal(typeof symObj,'object');
});

QUnit.test( "Symbol: for in", function( assert ) {

  var obj = {
    [Symbol("a")]: 'a'
  };

  obj[Symbol('a2')] = 'a2';
  obj[Symbol.for('b')] = 'b';
  obj['c'] = 'c';
  obj.d = 'd';

  var tmp = [];
  for (var i in obj) {
     tmp.push(i);
  }

  assert.deepEqual(tmp,["c", "d"]);
  assert.deepEqual(Object.getOwnPropertyNames(obj),["c", "d"]);

  //assert.deepEqual(Object.getOwnPropertySymbols(obj),[null, null, null]);
});
