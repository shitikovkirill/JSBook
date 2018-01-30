QUnit.test( "Iterator", function( assert ) {
  'use strict';

  let range = {
    from: 1,
    to: 5
  }

  // сделаем объект range итерируемым
  range[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        } else {
          return {
            done: true
          };
        }
      }

    }
  };

  assert.expect( 5 );
  for (let num of range) {
    assert.ok( num < 6 );
  }
});

QUnit.test( "Iterator: next", function( assert ) {
  var arr = [1,2,3];

  var it = arr[Symbol.iterator]();

  assert.propEqual(it.next(), {"value": 1,"done": false});
  assert.propEqual(it.next(), {"value": 2,"done": false});
  assert.propEqual(it.next(), {"value": 3,"done": false});

  assert.propEqual(it.next(), {"value": undefined,"done": true});
});

QUnit.test( "Iterator: map", function( assert ) {
  var m = new Map();
  m.set("foo", 42);
  m.set({cool: true}, "hello world");


  var it1 = m[Symbol.iterator]();
  var it2 = m.entries();

  var res11 = it1.next();
  var res12 = it2.next();
  assert.propEqual(res11, res12);
  assert.propEqual(res11, {"value": ["foo", 42],"done": false});

  var res21 = it1.next();
  var res22 = it2.next();
  assert.propEqual(res21, res22);
  assert.propEqual(res21, {"value": [{cool: true}, "hello world"],"done": false});

  assert.propEqual(it1.next(), {"value": undefined,"done": true});
  assert.propEqual(it2.next(), {"value": undefined,"done": true});
});
