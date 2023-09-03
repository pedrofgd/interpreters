const Eva = require('../Eva');

const tests = [
    require('./self-eval-test'),
    require('./math-test'),
    require('./variables-test'),
    require('./block-test'),
    require('./if-test'),
    require('./while-test'),
    require('./built-in-function-test'),
    require('./user-defined-function-test'),
    require('./lambda-function-test'),
    require('./switch-test'),
    require('./for-loop-test'),
    require('./increment-test'),
    require('./decrement-test'),
    require('./class-test'),
];

const eva = new Eva();

tests.forEach(test => test(eva));

eva.eval(['print', '"Hello, "', '"World!"']);

console.log('All assertions passed');
