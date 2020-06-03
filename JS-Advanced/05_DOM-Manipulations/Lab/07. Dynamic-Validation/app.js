function validate() {
    const input = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', validateEmail);

    function validateEmail() {
        let email = this.value;
        if (pattern.test(email)) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    }
}