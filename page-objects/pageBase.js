const assertTitle = {
    async assertTitle(title) {
        // FIXME: chaining the click command to the rest of the commands causes an uncaughtRejection in case of an element locate error
        return this.assert.titleEquals(title);
    }
};

const pageBase = {

    commands: [
        assertTitle,
    ],

    elements: {
        cookie: {
            selector: '.cookie-consent-bar-wrap'
        },

    }
};

module.exports = pageBase;