function solve() {
    const buttons = document.getElementsByTagName('button');
    const checkoutText = document.getElementsByTagName('textarea')[0];
    const checkout = [];

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function(event) {
            if (event.target.className === "add-product") {
                new Product(event.target.parentElement.parentElement).add();
            } else {
                const listProducts = [...(new Set(checkout.map(e => e.name)).values())].join(', ');
                const totalPrice = checkout.reduce((arr, e) => arr + e.price, 0);
                checkoutText.value += `\nYou bought ${ listProducts } for ${ totalPrice.toFixed(2) }.`;
                Array.from(buttons).forEach(b => b.disabled = true)
            }
        });
    }

    function Product(e) {
        this.element = e;
        this.price = Number(this.element.lastElementChild.textContent);
        this.name = this.element.getElementsByClassName('product-title')[0].textContent;
        this.add = function() {checkout.push(this); checkoutUpdate()};
        this.toString = () => `Added ${ this.name } for ${ this.price.toFixed(2) } to the cart.`
    }

    function checkoutUpdate() {
        checkoutText.value = checkout.map(e => e.toString()).join('\n')
    }
}