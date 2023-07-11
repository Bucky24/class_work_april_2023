const Header = require("../../../lib/components/header");
const { formatDate } = require("../../../lib/date");

describe("Header", () => {
    describe("render", () => {
        it('should render the header with current date', () => {
            // setup
            const header = new Header('Sample Title');
            const now = new Date();
            const dateString = formatDate(now);

            // test
            const html = header.throwSpaghettiAtWall();

            // validate
            expect(html).toBe(`<header class=\"header\"><h1>Sample Title</h1><p>${dateString}</p></header>`);
        });
    });
});