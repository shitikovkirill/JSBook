QUnit.test( "Interpolation: 1", function( assert ) {

	var name = "Ted";

	var hello = `Hello ${name}`;
	

    assert.equal(hello, 'Hello Ted')

});

QUnit.test( "Interpolation: 2", function( assert ) {
	var text_old = "test  \n" +
		"test";

    assert.equal(text_old, "test  \ntest");

	var text = `test  
test`;
	

    assert.equal(text, "test  \ntest")

});

QUnit.test( "Interpolation: 3", function( assert ) {

	function upper(s){
		return s.toUpperCase();
	}

	var who = "reader";

	var text = `test ${upper("fff")} test
test ${upper(`${who}s`)} test`;

	assert.equal(text, "test FFF test\ntest READERS test")

});

QUnit.test( "Interpolation: tegging string", function( assert ) {

	function foo(strings, ...values){
		return [strings, values] 
	}

	var text = 'my text';

	var res = foo `test ${text}!`;
	assert.deepEqual(res, [['test ', '!'], ['my text']])

});

QUnit.test( "Interpolation: raw", function( assert ) {
	
	function showraw(strings, ...values){

		assert.equal(strings, "test\ntest");

		assert.equal(strings.raw, "test\\ntest");
	}
	
	showraw `test\ntest`;
	
});
