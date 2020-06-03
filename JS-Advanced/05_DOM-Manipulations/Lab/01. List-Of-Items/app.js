function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    items.appendChild(li);
    input.value = ''
}