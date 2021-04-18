const randomizeBtn = document.getElementById('randomizeBtn');

function getRandomBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
};

function showNumber(){
    let minNumber = document.getElementById('minNumber');
    let maxNumber = document.getElementById('maxNumber');
    
    let minNumberValue = +minNumber.value;
    let maxNumberValue = +maxNumber.value;
    let randomNumber = document.getElementById('randomNumber');

    if (minNumberValue >= maxNumberValue) {
        maxNumberValue = minNumberValue + 1;
        maxNumber.value = maxNumberValue;
    };

    if(minNumberValue < 1){
        minNumber.value = 1;
        minNumberValue = 1;
    };

    randomNumber.innerHTML = getRandomBetween(minNumberValue, maxNumberValue);
};



randomizeBtn.addEventListener('click', showNumber);

