/* eslint func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off, no-var:off, id-length:off*/
function showHoisting() {
    var x = 1;
    if (x === 2) {
        var y = true;
    }
    return y;
}

export default showHoisting;