function growingWord() {
  const parent = document.getElementById('exercise');
  const colors = Array.from(parent.firstElementChild.children).map(e => e.textContent.toLowerCase());

  // change size
  const element = parent.lastElementChild;
  const size = new Size(window.getComputedStyle(element).getPropertyValue('font-size'));

  size.number = size.number || 1;
  size.multiply(2);
  element.style.fontSize = size.toString();

  // change color
  let color = element.style.color;

  for (let i = 0; i < colors.length; i++) {

      if (i === colors.length - 1) {
          color = colors[0];
      } else if (color === colors[i]) {
          color = colors[i + 1];
          break
      }
  }

  element.style.color = color;

  function Size(size) {
      this.number = parseFloat(size) || 0; // parseInt(size.replace(/[^0-9.]+/g,'')) || 0
      this.suffix = size.replace(/[0-9.]+/g,'') || 'px';
      this.toString = () => `${this.number}${this.suffix}`;
      this.multiply = (multiplier) => this.number *= multiplier
  }
}