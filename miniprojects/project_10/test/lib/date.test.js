const { formatDate } = require('../../lib/date');

describe('date', () => {
    describe('formatDate', () => {
        it('should give the correct date', () => {
            const testDate = new Date(1688555439000); // 2023/5/7

            const formatted = formatDate(testDate);

            expect(formatted).toBe("July 5, 2023");
        });
    });
});