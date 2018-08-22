/* eslint func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off */
function convert(romanNumeral) {
    let number = null;
    switch (romanNumeral) {
        case 'i':
            number = 1;
            break;
        case 'v':
            number = 5;
            break;
        case 'x':
            number = 10;
            break;
        default:
            number = 0;
            break;
    }

return number;
}
export default convert;