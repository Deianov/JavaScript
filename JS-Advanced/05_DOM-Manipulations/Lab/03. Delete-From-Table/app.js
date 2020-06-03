function deleteByEmail() {
    const input = document.getElementsByTagName('input')[0];
    const email = input.value;
    if (email) {
        const tbody = document.getElementById('customers').getElementsByTagName('tbody')[0];
        for (let i = 0; i < tbody.children.length; i++) {
            if (tbody.children[i].lastElementChild.textContent === email) {
                tbody.removeChild(tbody.children[i]);
                input.value = '';
                document.getElementById('result').innerText = 'Deleted.';
                return;
            }
        }
        document.getElementById('result').innerText = 'Not found.';
    }
}
