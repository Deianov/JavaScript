function solve() {
    const links = document.getElementsByClassName('link-1');

    for (let i = 0; i < links.length; i++) {

        const xref = links[i].firstElementChild;

        xref.addEventListener('click', function () {

            const countElement = this.nextElementSibling;
            countElement.textContent = countElement.textContent.replace(/[0-9]+/g, c => `${ parseInt(c) + 1 }`)
        })
    }
}