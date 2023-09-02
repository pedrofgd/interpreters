const Eva = require('../Eva');
const Environment = require('../Environment');

const tests = [
    require('./self-eval-test'),
    require('./math-test'),
    require('./variables-test'),
    require('./block-test'),
    require('./if-test'),
    require('./while-test'),
    require('./built-in-function-test'),
];

const eva = new Eva();

tests.forEach(test => test(eva));

eva.eval(['print', '"Hello, "', '"World!"']);

console.log('All assertions passed');
