function math(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        default:
            throw new Error("Bad operation " + operation);
    }
}

module.exports = math;