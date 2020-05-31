/**
 * 
 * @return {string} 
 */

function jsonToHtmlTable(jsonString) {

    const products = JSON.parse(jsonString);
    const space = '   ';
    const keys = Object.keys(products[0]);

    let html = `<table>\n${ space }<tr>`;

    for (const key of keys) {
        html += `<th>${ escapeHtml(key) }</th>`
    }
    html += `</tr>\n`;

    for (const product of products) {

        html += `${ space }<tr>`;

        for (const key of keys) {
            html += `<td>${ escapeHtml(product[key]) }</td>`
        }
        html += `</tr>\n`;
    }
 
    return html += '</table>';

    function escapeHtml(unsafe) {
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;"); // HTML5 &apos ?
    }
}

console.log(jsonToHtmlTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));
console.log(jsonToHtmlTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']));