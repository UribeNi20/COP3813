/*!
* Start Bootstrap - Heroic Features v5.0.5 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function everything() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);

let avg = (Number(num1) + Number(num2) + Number(num3)) / 3;

let med = num1;

if (num1 != max && num1 != min) {
    med = num1
}

if (num2 != max && num2 != min) {
    med = num2
}

if (num3 != max && num3 != min) {
    med = num3
}

let range = max - min



  document.getElementById("max").innerHTML = max;
  document.getElementById("min").innerHTML = min;
  document.getElementById("mean").innerHTML = avg;
  document.getElementById("med").innerHTML = med;
  document.getElementById("range").innerHTML = range;
}