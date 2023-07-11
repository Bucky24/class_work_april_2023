const Component = require('../component');
const { formatDate } = require('../date')

class Header extends Component {
    constructor(title) {
        super();
        this.title = title;
    }

    throwSpaghettiAtWall() {
        const now = new Date();

        return `<header class="header"><h1>${this.title}</h1><p>${formatDate(now)}</p></header>`;
    }
}

module.exports = Header;