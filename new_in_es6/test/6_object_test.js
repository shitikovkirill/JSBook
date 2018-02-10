QUnit.test( "Object: 1", function( assert ) {

    var a = 2, b = 4;

    var old = {
        'a':a,
        'b':b
    };
    assert.deepEqual(old, {a:2, b:4});

    var new_ = {
        a,
        b
    };

    assert.deepEqual(new_, {a:2, b:4});
});

QUnit.test( "Object: 2", function( assert ) {

    var old = {
        'x': function(){},
        'w': function(){}
    };
    assert.equal(typeof old.w, 'function')

    var new_ = {
        x(){},
        w(){}
    };

    assert.equal(typeof new_.w, 'function')

});

QUnit.todo( "Object: 3", function( assert ) {

    var o = {
        *foo(){}
    };
});


QUnit.test( "Object: 4", function( assert ) {

    var o = {
        __id: 10,
        get id(){
            return this.__id++;
        },
        set id(v){
            this.__id = v;
        }
    };

    assert.equal(o.id, 10);
    assert.equal(o.id, 11);

    o.id=1;
    assert.equal(o.id, 1);
    assert.equal(o.id, 2);
});

QUnit.test( "Object: 4", function( assert ) {

    var prefix = 'user_';

    var o = {
        bas: function () {

        },
        [prefix + 'bar']: function () {

        },
        [prefix + 'baz']: function () {

        }
    };


    assert.equal(typeof o.user_bar, 'function')

});
