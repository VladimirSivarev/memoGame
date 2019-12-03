/*
   TO DO: 1. Разобраться, почему скрипт не работает
          2. Дождаться API
          3. Связать дивы попарно
          4. Разработать логику игры(расширяемый раздел)
          5. Разработать ИИ
*/

(function(){
    document.addEventListener("DOMContentLoaded", function(){
        const submitUserData = document.querySelector(".submit");
        const field = document.createElement('div');
        field.setAttribute('class', 'field');
        document.body.appendChild(field);

        function drawField(countOfPairs, field){
            for (let i = 0; i < countOfPairs*2; i++) {
                let card = document.createElement('div');
                card.setAttribute('class', 'card');
                card.setAttribute('id', i);
                document.field.appendChild(card);
            }
        }

        submitUserData.addEventListener("click", () => {
            const userName = document.querySelector(".nickname").nodeValue;
            const countOfPairs = Number(document.querySelector(".choise").nodeValue);
            drawField(countOfPairs, field);
        })
    })
}())
