/* eslint func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off, no-var:off, id-length:off, sort-keys:off,
newline-before-return:off*/
function showHoisting() {
    const z = {
        foo: true,
        bar: true,
        baz: true
    };
    z.foo = false;
    z.qux = true;
    const x = 2;
    if (x === 2) {
        // x = 3;
        const y = true;
        return y;
    }

return false;
}

export default showHoisting;