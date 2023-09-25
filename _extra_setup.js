const { Before, After } = require('@cucumber/cucumber');


Before(async function () {
    console.log("before test");
});

After(async function (scenario) {
    console.log("STATUS: ", scenario.result.status);
    //if (scenario.result.status === 'FAILED') {
    const file_path = `screenshots/errors/${scenario.result.status} Scenario ${scenario.pickle.name}.png`;
    // Attach the screenshot path to the test result+
    var buffer = await browser.screenshot({ path: file_path })
    this.attach(buffer, { mediaType: 'base64:image/png' })
    //browser.saveScreenshot(file_path);
    //}
});
