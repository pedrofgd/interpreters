const { test } = require('./test-util');

module.exports = eva => {
    test(eva, `
        (begin
            (var x 1)
            (++ x))
    `,
    2);

    test(eva, `
        (begin
            (var x 2)
            (+= x 2))
    `,
    4);
};
