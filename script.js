inputColor1 = document.querySelector(".color1");
inputColor2 = document.querySelector(".color2");
inputColor1.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
inputColor2.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
css = document.querySelector("h4");
body = document.querySelector("body");
body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")";
css.textContent = inputColor1.value + "  " + inputColor2.value;
button = document.querySelector("button");


function setColor (){
	body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")";
    css.textContent = inputColor1.value + "  " + inputColor2.value;
};

function setBackground (){
	inputColor1.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    inputColor2.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    body = document.querySelector("body");
    body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")";
    css.textContent = inputColor1.value + "  " + inputColor2.value;
}

inputColor1.addEventListener("input", setColor);
inputColor2.addEventListener("input", setColor);
button.addEventListener("click", setBackground);




