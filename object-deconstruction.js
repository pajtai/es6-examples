function g({a: a=1, b: b=2, c: c=3}) {
    console.log(a,b,c);
}

g({
    a: 5,
    c: 0
});

tryit();
tryit();
tryit();
tryit();
tryit();

function account_info() {
    var info = 'something',
        err = Math.random() < 0.5;

    return [err ? null : info, err ? 'the reason' : null];
}

function tryit() {
    var info, error;

    [info, error] = account_info();

    if (error) {
        console.log('sorry',error);
    } else {
        console.log('welcome',info);
    }

}