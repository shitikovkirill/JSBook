var sym = Symbol("description");
typeof sym;
sym.toString();

sym instanceof Symbol;
var symObj = Object(sym);
symObj instanceof Symbol;
symObj.valueOf() === sym;

Symbol('foo') === Symbol('foo')

Symbol.for('instance');
Symbol.keyFor(sym);
