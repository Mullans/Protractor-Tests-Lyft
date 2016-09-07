exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['*.spec.js'],

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },

    baseUrl: 'https://www.lyft.com',

    onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
        global.hasClass = function (element, cls) {
            return element.getAttribute('class').then(function (classes) {
                return classes.split(' ').indexOf(cls) !== -1;
            });
        };
    }
}

