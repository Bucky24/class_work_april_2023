const Component = require('../../lib/component');

describe('Component', () => {
    describe('render', () => {
        it('should throw an error when called', () => {
            // setup
            const component = new Component();

            // test/verify
            expect(() => {
                component.throwSpaghettiAtWall();
            }).toThrow('Child class must implement render');
        });
    });
});