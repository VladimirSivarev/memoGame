/*
   TO DO: 1. Разобраться, почему скрипт не работает
          2. Дождаться API
          3. Связать дивы попарно
          4. Разработать логику игры(расширяемый раздел)
          5. Разработать ИИ
*/

(function(){
    document.addEventListener("DOMContentLoaded", () => {
        const submitUserData = document.querySelector(".submit");
        const field = document.querySelector(".field");

        function drawField(countOfPairs, field){
            for (let i = 0; i < countOfPairs*2; i++) {
                let card = '<div class="card" id="' + i + '"></div>'
                field.innerHTML += card;
            }
        }

        submitUserData.addEventListener("click", () => {
            const userName = document.querySelector(".nickname").nodeValue;
            const countOfPairs = document.querySelector(".choise").nodeValue;
            drawField(countOfPairs, field);
        })
    })
}())
