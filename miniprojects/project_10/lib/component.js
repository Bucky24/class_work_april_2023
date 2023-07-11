class Component {
    constructor(children) {
        this.children = children || [];
    }

    throwSpaghettiAtWall() {
        throw new Error("Child class must implement render");
    }

    // It's done when a `renderInnerHTML()` method is placed on the `Component` class that loops over the children and converts any that aren't strings to strings by calling their `render()` method.

    renderInnerHtml() {
        const childStrings = [];
        for (const child of this.children) {
            if (typeof child !== 'string') {
                const childString = child.throwSpaghettiAtWall();
                childStrings.push(childString);
            } else {
                childStrings.push(child);
            }
        }

        return childStrings.join("");
    }
}

module.exports = Component;