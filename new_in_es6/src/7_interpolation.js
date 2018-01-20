var name = "Ted";

var hello = 'Hello ${name}';

// -----------------

var text = 'etyrterty  
dfgsfsgfgfg';

// -----------------

function upper(s){
	return s.toUpperCase();
}

var who = "reader";

var text = 'werew ${upper("fff")} h
dggd ${upper('${who}s')} vvv';

// -----------------

function foo(strings, ...values){
	return [strungs, values] 
}

var text = 'my text';

foo `test ${text}!`;
