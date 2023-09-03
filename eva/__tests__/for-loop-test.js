const { test } = require('./test-util');

module.exports = eva => {
    test(eva, `
        (begin
            (var x 1)
            (for (var i 0)
                 (< i 10)
                 (set i (+ i 1))
                 (set x (+ x 1)))
        ) `,
    10);

    test(eva, `
        (begin
            (var x 1)
            (for (var i 0)
                 (< i 10)
                 (++ i)
                 (++ x))
        )
    `,
    10);

    test(eva, `
        (begin
            (var x 10)
            (for (var i 10)
                 (> i 0)
                 (-- i)
                 (-- x))
        )
    `,
    0);
};
