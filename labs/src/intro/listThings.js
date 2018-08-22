export function listThings (str, arr) {
    let htmlStr = '';
    for (let index in arr) {
        htmlStr += `<${str}>${+index + 1}. ${arr[index]}</${str}>`; 
    }
    return htmlStr;
}