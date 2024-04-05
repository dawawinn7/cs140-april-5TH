// script.js - Let's add some interactivity to make our web development journey exciting!

document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});
function areaOfSquareSizeNegativeTwenty(){
let side = 20 ;
let area = side * side ;
// this does the same thing , area is area^2
// math.pow (side 2)
alert(" the area of square with a side of 20 is : " + area);
if(side <= 0 ){
alert("Area must be larger than 0.")
}
else{
    alert(" The area of a square with a side of 20 is: " + area) ;
}
}