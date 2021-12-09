let calculation = document.querySelector('.calculation');    //Кнопка расcчёта
let buttonClear = document.querySelector('.button-clear');  //Кнопка очистки
let summ = document.querySelector('.summ');     //Сумма кредита
let stavka = document.querySelector('.stavka');     //Процентная ставка
let srok = document.querySelector('.srok');     //Срок кредита
let select_vid = document.querySelector('.select-vid');     //Вид платежа
let input_price = document.querySelector('.input-price');   //Ежемесячный платёж

calculation.onclick = function () //Кнопка рассчёта
{
    if (summ.value <= 0 || stavka.value <= 0 || srok.value <= 0) {
        alert("Поля не заполнены или введён неверный формат!");
    }
    else {
        let a = + summ.value;
        let b = + stavka.value / (100*stavka.value);
        let c = + srok.value;
        input_price.value = Math.round((a * (b / (1 - (1 + b) ** (-c))))); 
    }
}

buttonClear.onclick = function () //Кнопка очистки
{
    select_vid.value = "ann";
    input_price.value = '';
    summ.value = '';
    stavka.value = '';
    srok.value = '';
}