function jsonTable(args) {

    const space = '\t';
    let html = `<table>\n`;

    for (const jsonString of args) {
        const person = JSON.parse(jsonString);

        html += `${ space }<tr>\n`;
        html += `${ space.repeat(2) }<td>${ escapeHtml(person.name) }</td>\n`;
        html += `${ space.repeat(2) }<td>${ escapeHtml(person.position) }</td>\n`;
        html += `${ space.repeat(2) }<td>${ escapeHtml(person.salary) }</td>\n`;
        html += `${ space }</tr>\n`
    }
    
    return html + '</table>';

    function escapeHtml(unsafe) {
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

function jsonTableVariant2(args) {

    const persons = args.map(jsonString => JSON.parse(jsonString));
    const space = '\t';

    const createTable = content => `<table>${ content }\n</table>`;
    const createRow = content => `\n${ space }<tr>${ content }\n${ space }</tr>`;
    const createData = content => `\n${ space.repeat(2) }<td>${ content }</td>`;

    const tableRows = persons.reduce((rows, row) => {

        const personTds = Object.values(row).reduce((tds, td) => {
            return tds + createData(escapeHtml(td))
        }, '');

        return rows + createRow(personTds)
    }, '');

    return createTable(tableRows);

    function escapeHtml(unsafe) {
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

console.log(jsonTableVariant2([
'{"name":"Pesho&","position":"<Promenliva>","salary":100000}',
'{"name":"Teo\'","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']));