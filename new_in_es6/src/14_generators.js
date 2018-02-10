function *foo(){
    var x = 10;
    var y = 20;

    yield;

    var z = x + y;
}

var it = foo();
it.next();

function *foo(){
    let i = 1;
    while (true){
        yield i++;
    }
}

var it = foo();
it.next();

