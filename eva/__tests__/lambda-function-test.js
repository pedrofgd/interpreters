const { test } = require('./test-util');

module.exports = eva => {
    test(eva, `
        (begin

            (def onClick (callback)
                (begin
                    (var x 10)
                    (var y 20)
                    (callback (+ x y))))

            (onClick (lambda (data) (* data 10)))

        )
    `,
    300);

    // Immediately-invoked lambda expression - IILE:
    test(eva, `
        ((lambda (x) (* x x)) 2)
    `,
    4);

    // Save lambda to a variable:
    test(eva, `
        (begin
            (var square (lambda (x) (* x x)))
            (square 2))
    `,
    4);

    // Recursive function:
    test(eva, `
        (begin
            (def factorial (x)
                (begin
                    (if (= x 1)
                        1
                        (* x (factorial (- x 1))))))

                (factorial 5)
        )
    `,
    120);
}
