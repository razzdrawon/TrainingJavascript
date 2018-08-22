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
        case 'xv':
            number = 15;
            break;
        case 'l':
            number = 50;
            break;
        case 'c':
            number = 100;
            break;
        case 'd':
            number = 500;
            break;
        case 'm':
            number = 1000;
            break;
        default:
            number = 0;
            break;
    }

return number;
}

export default convert;