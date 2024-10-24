userSurname = document.querySelector('[name = "surname"]')
userName =  document.querySelector('[name = "name"]');

goodsElements = document.querySelectorAll('[name = "goods"]');
countElements = document.querySelectorAll(".colvo");

btn = document.querySelector(".btn");
resultElem =document.querySelector(".sum");


let Goods = ["expresso","americano","latte","capuchino","chocolate_muffin","blueberry_muffin","apple_tart"];
let kolvoGoods = [0,0,0,0,0,0,0];

let sumGoods = [0,0,0,0,0,0,0];



function countSum()
{
    totalSum = 0;
    for(let i =0;i<7;i++)
    {
        
        if(goodsElements[i].checked)
        {
            totalSum += sumGoods[i];
        }
        else{
            totalSum -= sumGoods[i];
        }
    }
    return totalSum;
}



goodsElements.forEach(elem => {
    elem.addEventListener("change",function(){
        for(let i = 0; i < 7;i++)
        {
            if(elem.checked)
            {
                if(elem.dataset.goods == Goods[i])
                {
                    countElements[i].value = "1";
                    kolvoGoods[i] += parseInt(countElements[i].value);
                    sumGoods[i] += parseInt(elem.value)*kolvoGoods[i];
                    resultElem.innerHTML = countSum();
                }
            }
            else
            {
                if(elem.dataset.goods == Goods[i])
                    {
                        sumGoods[i] -= parseInt(elem.value)*kolvoGoods[i];
                        countElements[i].value = "0";
                        resultElem.innerHTML = countSum();
                        kolvoGoods[i] =0;
                    }
            }
            
        }
    });
});

countElements.forEach(product => {
    product.addEventListener("change",function(){
        for(let i =0;i<7;i++){
            if(product.id == goodsElements[i].dataset.goods & goodsElements[i].checked & product.value[0] != "0" & parseInt(product.value)>0)
            {
                kolvoGoods[i] = parseInt(product.value);
                sumGoods[i] = parseInt(goodsElements[i].value)*kolvoGoods[i];
                resultElem.innerHTML = countSum();
            }
            else if(product.id == goodsElements[i].dataset.goods & goodsElements[i].checked)
            {
                product.value = "0";
                kolvoGoods[i] = 0;
                sumGoods[i] = parseInt(goodsElements[i].value)*kolvoGoods[i];
                resultElem.innerHTML = countSum();
            }
        }
    });

    
});

btn.addEventListener("click",function(){
    alert(`Заказчик: ${userName.value} ${userSurname.value}\nИтого: ${resultElem.textContent} рублей`);

});




