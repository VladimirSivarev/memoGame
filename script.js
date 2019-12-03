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
