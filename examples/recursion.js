function fib(n) {
    console.log("Starting with " + n);
    if (n < 2) {
        return 1;
    }

    console.log("From " + n + ` going into ${n-2} and ${n-1}`);
    const result = fib(n-2) + fib(n-1);
    console.log("Got result for " + n + ": " + result);

    return result;
}

const obj = {
    obj2: {
        obj3: {
            obj4: {
                foo: 'bar',
            },
        },
    },
};

const fetchString = "obj2.obj3.obj4.foo";

fib(10);

/*
1 1 2 3 5 8 13 21 34
*/