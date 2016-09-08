var customMatchers = {
    toBeGoofy: function (util, customEqualityTesters) {

        return {
            compare: function (actual, expected) {

                if (expected === undefined) {
                    expected = '';
                }

                var result = {};

                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);

                if (result.pass) {
                    result.message = "Expected " + actual + " not to be quite so goofy";
                } else {
                    result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
                }

                return result;
            }
        };
    },

    toHaveClass: function () {
        return {
            compare: function (actual, className) {
                return {
                    pass: actual.getAttribute('class').then(function (classes) {
                        return classes.split(' ').indexOf(className) !== -1||classes.split(' ').indexOf(className+"\n") !== -1;
                    }),
                    message: "Expected elemenet to have class: "+className
                }
            },
            negativeCompare: function(actual, className){
                return {
                    pass: actual.getAttribute('class').then(function (classes) {
                        return classes.split(' ').indexOf(className) !== -1||classes.split(' ').indexOf(className+"\n") === -1;
                    }),
                    message: "Expected element not to have class: " + className
                }
            }
        }
    }
};

module.exports = customMatchers;
