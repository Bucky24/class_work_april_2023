const math = require('./index');

describe('index', () => {
    describe("math", () => {
        it('should add correctly', () => {
            const operation = "add";
            const num1 = 5;
            const num2 = 6;
            
            const result = math(operation, num1, num2);

            expect(result).toBe(11);
        });
    });
});