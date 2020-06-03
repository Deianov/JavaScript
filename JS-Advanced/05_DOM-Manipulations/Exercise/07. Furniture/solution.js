function solve() {
    const text = document.getElementsByTagName('textarea');
    const buttons = document.getElementsByTagName('button');
    const tbody = document.getElementsByTagName('tbody')[0];

    const furnitures = [];
    furnitures.push(new Furniture(tbody.firstElementChild));
    furnitures[0].checkbox().disabled = false;

    buttons[0].addEventListener('click', function() {
        for (const data of JSON.parse(text[0].value)) {
            furnitures.push(new Furniture(createRow(data)))
        }
    });

    buttons[1].addEventListener('click', function() {
        const bought = furnitures.filter(e => e.checkbox()['checked']);
        const names = bought.map(e => e.name()).join(', ');
        const totalPrice = bought.reduce((acc, e) => acc + e.price(), 0).toFixed(2);
        const averageFactor = bought.reduce((acc, e) => acc + e.factor(), 0) / bought.length;
        text[1].value = '';
        text[1].value += `Bought furniture: ${ names }\n`;
        text[1].value += `Total price: ${ totalPrice }\n`;
        text[1].value += `Average decoration factor: ${ averageFactor }`
    });

    function Furniture(e) {
        this.el = e;
        this.name = () => this.el.children[1].innerText;
        this.price = () => parseFloat(this.el.children[2].innerText);
        this.factor = () => parseFloat(this.el.children[3].innerText);
        this.checkbox = () => this.el.children[4].children[0]
    }

    function createRow(jsonObject) {
        const row = document.createElement('tr');
        tbody.appendChild(row);
        row.appendChild(createCell('img', 'src', jsonObject['img']));
        row.appendChild(createCell('p', 'textContent', jsonObject['name']));
        row.appendChild(createCell('p', 'textContent', jsonObject['price']));
        row.appendChild(createCell('p', 'textContent', jsonObject['decFactor']));
        row.appendChild(createCell('input', 'type', 'checkbox'));
        return row;
    }

    function createCell(tagName, att, value) {
        const td = document.createElement('td');
        const child = document.createElement(tagName);
        child[att] = value;
        td.appendChild(child);
        return td;
    }
}