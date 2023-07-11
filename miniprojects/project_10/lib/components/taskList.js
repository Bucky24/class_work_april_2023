const Component = require('../component');

class TaskList extends Component {
    throwSpaghettiAtWall() {
        return `<ul class="tasks">${this.renderInnerHtml()}</ul>`;
    }
}

module.exports = TaskList;