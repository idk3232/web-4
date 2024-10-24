resultElement = document.querySelector(".result");
btnElement = document.querySelector(".btn");
checkboxButtons = document.querySelectorAll('[name ="food"]');

btnElement.addEventListener("click",function(){
    let totalSum = 0;
    
    for(let i = 0;i<3;i++)
    {
        if(checkboxButtons[i].checked)
        {
            totalSum += parseInt(checkboxButtons[i].value);
        }

    }
    
    /*
    for (const checkButton of checkboxButtons){    
        if(checkButton.checked){    
            totalSum += parseInt(checkButton.value);
        }
    }
    */
    resultElement.textContent = "Общая стоимость: " + totalSum + " руб";
    totalSum =0;
})