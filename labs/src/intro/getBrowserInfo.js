/* eslint guard-for-in:off */
const getBrowserInfo = (cssClass = "") => {
  let html = `<ul class="${cssClass}">`;
  for (let prop in navigator) {
    try {
      html += `<li>${prop}=${navigator[prop]}</li>`;
    } catch (error) {
      console.error(error);
    }
  }
  html += `</ul>`;

return html;
};
export default getBrowserInfo;