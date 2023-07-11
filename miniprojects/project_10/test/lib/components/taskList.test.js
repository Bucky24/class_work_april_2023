const TaskList = require("../../../lib/components/taskList");
const TaskListItem = require("../../../lib/components/taskListItem");

describe("TaskList", () => {
    describe('render', () => {
        it('should render correctly', () => {
            const taskList = new TaskList([
                new TaskListItem('item 1'),
                new TaskListItem('item 2'),
            ]);

            const html = taskList.throwSpaghettiAtWall();

            expect(html).toBe('<ul class=\"tasks\"><li class=\"tasks-item \">item 1</li><li class=\"tasks-item \">item 2</li></ul>');
        });
    });
});