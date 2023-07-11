const TaskListItem = require("../../../lib/components/taskListItem");

describe("TaskListItem", () => {
    describe('render', () => {
        it('should render correctly', () => {
            const listItem = new TaskListItem('hi');

            const html = listItem.throwSpaghettiAtWall();

            expect(html).toBe("<li class=\"tasks-item \">hi</li>");
        });

        it('should render priority correctly', () => {
            const listItem = new TaskListItem('hi', true);

            const html = listItem.throwSpaghettiAtWall();

            expect(html).toBe("<li class=\"tasks-item tasks-item-priority\">hi</li>");
        });
    });
});