let height = prompt('what is your height?  {In Meter}');
let weight = prompt('what is your weight   {In KG}');
let multipliedHeight = height * height;
let BMI = weight / multipliedHeight;
document.getElementById('change').innerHTML = BMI;
console.log(BMI);
if (BMI < 18.5) {
    document.getElementById('BMI').innerHTML = 'You are leading an Unhealthy Life!';
}
else if (BMI > 18.6) {
    document.getElementById('BMI').innerHTML = 'You are leading a Healthy Life!';
}
if (BMI > 25) {
    document.getElementById('BMI').innerHTML = 'You are fat!';
}
if (BMI > 30.1) {
    document.getElementById('BMI').innerHTML = 'You will die if you eat like this';
}