inputElement = document.querySelectorAll(".inp");
btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");

btnElement.addEventListener("click",function(){
    resultElement.textContent = "Ответ: "+"Здравствуйте, "+ inputElement[0].value+" " +inputElement[1].value +"!";

})
