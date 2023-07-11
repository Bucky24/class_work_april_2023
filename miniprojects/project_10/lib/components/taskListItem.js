const Component = require("../component");

class TaskListItem extends Component {
    constructor(task, priority) {
        super([task]);
        this.priority = priority;
    }

    throwSpaghettiAtWall() {
        return `<li class="tasks-item ${this.priority ? 'tasks-item-priority' : ''}">${this.renderInnerHtml()}</li>`;
    }
}

module.exports = TaskListItem;