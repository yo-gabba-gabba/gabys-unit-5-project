let ButtonOne = document.querySelector(".buttonOne");
let Kiwiimage = document.querySelector(".kiwi-result");
let strawberryimage = document.querySelector(".strawberry-result");
let mangoimage = document.querySelector(".mango-result");
let pineappleimage = document.querySelector(".pineapple-result");
let tryagain = document.querySelector(".tryagain");
let results = document.querySelector(".result");
ButtonOne.onclick = function() {
    let inputOne = document.querySelector(".inputOne").value;
    let inputTwo = document.querySelector(".inputTwo").value;
    if (inputTwo >= 1 && inputTwo <= 4 && inputOne === "staying home") {
        console.log("strawberry");
        document.querySelector(".result").innerHTML = "You are a Strawberry!";
        strawberryimage.style.display = "block";
    } else if (inputTwo >= 5 && inputTwo <= 8 && inputOne === "staying home") {
        console.log("kiwi");
        document.querySelector(".result").innerHTML = "You are a Kiwi!";
        Kiwiimage.style.display = "block";

    } else if (inputTwo >= 1 && inputTwo <= 4 && inputOne === "going out") {
        console.log("mango");
        document.querySelector(".result").innerHTML = "You are a Mango!";
        mangoimage.style.display = "block";
    } else if (inputTwo >= 5 && inputTwo <= 8 && inputOne === "going out") {
    console.log("pineapple");
        document.querySelector(".result").innerHTML = " You are a Pineapple!";
        pineappleimage.style.display = "block";
      
    } else {
        results.style.display = "block";
        results.innerHTML = "Try AGAIN- your response does not match the possible answers";
        tryagain.style.display = "block";
    }
};