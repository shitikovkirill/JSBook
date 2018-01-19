QUnit.test( "Object: 1", function( assert ) {

    var a = 2, b = 4;

    var o = {
        a,
        b
    };

    assert.deepEqual(o, {a:2, b:4});
});

QUnit.test( "Object: 2", function( assert ) {

    var o = {
        x(){},
        w(){}
    };

    assert.equal(typeof o.w, 'function')

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
