function scoreToHTML(jsonString) {

    let html = '<table>\n   <tr><th>name</th><th>score</th></tr>\n';

    const persons = JSON.parse(jsonString);

    for (const person of persons) {

        html += `   <tr><td>${ escapeHtml(person.name) }</td>`;
        html += `<td>${ person.score }</td></tr>\n`;
    }

    return html += '</table>';

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;"); // HTML5 &apos ?
    }
}

console.log(scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']));