const { test } = require('./test-util');

module.exports = eva => {
    test(eva, `
        (begin
            (var x 2)
            (-- x))
    `,
    1);

    test(eva, `
        (begin
            (var x 2)
            (-= x 2))
    `,
    0);
};
