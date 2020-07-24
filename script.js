
let dark = false;
let light = true;
let sun='<i class="fas fa-sun"></i>'; 
let moon='<i class="fas fa-moon"></i>';
function mode() {
  if (dark === false) {
    dark = true;
    light = false;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("button").style.backgroundColor="gray";
    document.getElementById("cd").style.backgroundColor="black";
    document.getElementById("bt").innerHTML=sun;


  } else if (dark === true) {
    dark = false;
    light = true;
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("button").style.backgroundColor="white";
    document.getElementById("bt").innerHTML=moon;

    


  }
}