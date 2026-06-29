const { getMessage } = require('../app');

test('should return the correct welcome message', () => {
    expect(getMessage()).toBe(
        'Hello from Jenkins CI/CD\nStage1. Version 2 deployed automatically\nStage2. Testing of the Webhook'
    );
});
