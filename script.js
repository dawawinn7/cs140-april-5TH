// script.js - Let's add some interactivity to make our web development journey exciting!

document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});
function areaOfSquareSizeNegativeTwenty(){
let side = -20 ;

// this does the same thing , area is area^2
// math.pow (side 2)

if(side <= 0 ){
alert("Area must be larger than 0.")
}
else{
    let area = side * side ;
    alert(" The area of a square with a side of 20 is: " + area) ;
}
}





let p = document.getElementById("existingText");
console.log(p);

p.textContent ="this text has bee changed !" ;


function changeFooter(){
    let footerP = document.getElementById("footerParagraph");
    footerP.textContent ="Footer has been changed!";
}