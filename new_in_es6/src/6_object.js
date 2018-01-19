var a = 2, b = 4;

var o = {
    a,
    b
};

var o = {
    x() {
    },
    w() {
    }
};

var o = {
    * foo() {
    }
};

var o = {
    __id: 10,
    get id() {
        return this.__id++;
    },
    set id(v) {
        this.__id = v;
    }
};

var prefix = 'user_';

var o = {
    bas: function () {

    },
    [prefix + 'bar']: function () {

    },
    [prefix + 'baz']: function () {

    }
};