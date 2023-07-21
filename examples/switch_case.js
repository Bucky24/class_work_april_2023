const name = "jerry";

if (name === "jerry") {
    const foo = "bar";
    console.log("Jerry is a mouse");
} else if (name === "tom") {
    const foo = "bar";
    console.log("Tom is a cat");
} else if (name === "bob" || name === "allen" || name === "sid") {
    const foo = "bar";
    console.log(name + " is a person");
}

switch (name) {
    case 'jerry': 
        const foo = "bar";
        console.log("Jerry is a mouse");
        break;
    case "tom":
        const foo = "bar";
        console.log("Tom is a cat");
        break;
    case "bob":
    case 'allen':
    case 'sid':
        console.log(name + " is a person");
        break;
}