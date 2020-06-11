function area() {
   return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};
  
function calc(area, vol, input) {
    let objects = JSON.parse(input);
    function calc(obj) {
      let areaObj = Math.abs(area.call(obj));
      let volumeObj = Math.abs(vol.call(obj));
      return { area: areaObj, volume: volumeObj }
    }
    return objects.map(calc);
}

let obj = calc(area, vol, `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`);
console.log(JSON.stringify(obj));   // [{"area":2,"volume":20},{"area":49,"volume":490},{"area":10,"volume":100}]