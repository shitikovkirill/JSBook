QUnit.test( "Arrow function: 1", function( assert ) {

    function f_old() {
        return 12;
    }

    assert.equal(f_old(), 12);

    let f = () => 12;

    assert.equal(f(), 12);

    let f2 = () => {
        return 12;
    };
    assert.equal(f2(), 12);
});

QUnit.test( "Arrow function: 2", function( assert ) {

    function f_old(x) {
        return x*2;
    }

    assert.equal(f_old(6), 12);

    let f = x => x*2;

    assert.equal(f(6), 12);

    let r = (x) => x*2;
    assert.equal(r(6), 12);

    let b =(v=>v*2);
    assert.equal(b(6), 12);
});

QUnit.test( "Arrow function: 3", function( assert ) {

    let f = (x, y) => {
        let z=x*2+y;
        y++;
        x*=3;
        return (x+y+z)/2;
    };

    assert.equal(f(6,3), 18.5)

});

QUnit.test( "Arrow function: 3", function( assert ) {
    var a = [1,2,3,4,5];

    function foo(arg) {
        return arg*2;
    }
    var a_1 = a.map(foo);

    assert.deepEqual(a_1, [2,4,6,8,10]);

    var a_1 = a.map(function (arg) {
        return arg*2;
    });

    assert.deepEqual(a_1, [2,4,6,8,10]);

    var a_2=a.map(v=>v*2);

    assert.deepEqual(a_2, [2,4,6,8,10]);

});

QUnit.test( "Arrow function: this", function( assert ) {

    function Person() {
        // В конструкторе Person() `this` указывает на себя.
        this.age = 0;

        setTimeout(function growUp() {
            // В нестрогом режиме, в функции growUp() `this` указывает
            // на глобальный объект, который отличается от `this`,
            // определяемом в конструкторе Person().
            this.age++;
        }, 100);
    }

    var p = new Person();

    assert.notEqual(p.age, 1);
    assert.equal(p.age, 0);

    var done = assert.async();

    setTimeout(function() {
        assert.equal(p.age, 0);
        done();

    },200);
});


QUnit.test( "Arrow function: this 2", function( assert ) {

    function Person() {
        var that = this;
        that.age = 0;

        setTimeout(function growUp() {
            // Функция с обратным вызовом(callback) содержит переменную that, которая
            // ссылается на требуемый объект this.
            that.age++;
            console.log('Finish');
        }, 100);
    }

    var p = new Person();

    assert.equal(p.age, 0);

    var done = assert.async();

    setTimeout(function() {

        assert.equal(p.age, 1);
        done();

    },200);

});

QUnit.test( "Arrow function: this 3", function( assert ) {


    function Person(){
        this.age = 0;

        setTimeout(() => {
            this.age++; // `this` указывает на объект Person
            console.log('Finish');
        }, 100);
    }

    var p = new Person();

    assert.equal(p.age, 0);

    var done = assert.async();

    setTimeout(function() {
        assert.equal(p.age, 1);
        done();

    },200);
});

QUnit.test( "Arrow function: this call applay", function( assert ) {
    function showFullName() {
        return this.firstName + " " + this.lastName;
    }

    assert.equal(showFullName(), "undefined undefined");

    var user = {
        firstName: "Василий",
        lastName: "Петров"
    };

    assert.equal(showFullName.call(user), "Василий Петров");


    showFullName = () => this.firstName + " " + this.lastName;

    assert.equal(showFullName.call(user), "undefined undefined");
});