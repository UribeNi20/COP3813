function everything() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
//finding max and min of the users 3 numbers

let avg = (Number(num1) + Number(num2) + Number(num3)) / 3;
//adding the users 3 numbers and dividing the total by 3

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
//Above if statements seeing if a number is a min and max and if its neither then its automatically the median

let range = max - min
// subtracting max from min to find range

//document.getElementById("") is selecting the element with the id “name” and .innerHTML is setting the content of that
//element to the value of "".
  document.getElementById("max").innerHTML = max;
  document.getElementById("min").innerHTML = min;
  document.getElementById("mean").innerHTML = avg.toFixed(2);
  document.getElementById("med").innerHTML = med;
  document.getElementById("range").innerHTML = range;
}