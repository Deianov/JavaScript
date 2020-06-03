function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    if (inputText.value && inputValue.value) {
        const option = document.createElement('option');
        option.value = inputValue.value;
        option.appendChild(document.createTextNode(inputText.value));
        menu.appendChild(option);
        inputText.value = '';
        inputValue.value = ''
    }
}