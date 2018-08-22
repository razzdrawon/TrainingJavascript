/* eslint func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off, no-var:off, id-length:off*/
function showHoisting() {
    let x = 2;
    if (x === 2) {
        let y = true;
        return y;
    }
    else {
        return false;
    }
    
}

export default showHoisting;