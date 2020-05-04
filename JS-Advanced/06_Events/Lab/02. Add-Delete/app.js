function addItem() {
    const input = document.getElementById('newText');
    const items = document.getElementById('items');
    const text = input.value.trim();

    if (text) {
        const list = document.createElement('li');
        list.appendChild(document.createTextNode(text))

        const span = document.createElement('span');
        span.innerHTML = '<a href=\'#\'>[Delete]</a>';
        span.firstChild.addEventListener('click', deleteItem);
        list.appendChild(span);

        items.appendChild(list);
        input.value = ''

    }

    function deleteItem() {
        const li = this.parentNode.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
}