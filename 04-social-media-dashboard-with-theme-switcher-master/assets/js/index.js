
let check = document.querySelector('#check'),
    bgball = document.querySelector('.bgBall'),
    ball = document.querySelector('.ball'),
    bgTop = document.querySelector('.bgtop'),
    countF = document.querySelectorAll('.count'),
    card = document.querySelectorAll('.card'),
    text = document.querySelectorAll('.text-dark'),
    secondaryText = document.querySelectorAll('.secondary-text-dark'),
    cardOverview = document.querySelectorAll('.card-overview'),
    body = document.body;




check.addEventListener('change', ()=> {



    //Light mode
    if(check.checked == true){

        ball.setAttribute('style','transform:translateX(100%);background-color:white;');
        bgTop.setAttribute('style','opacity:0;');
        bgball.setAttribute('style','background:none;background-color:hsl(230, 22%, 74%);');
        body.setAttribute('style','background-color:hsl(0, 0%, 100%);');

        for (let i = 0; i < cardOverview.length; i++){

            cardOverview[i].classList.add("bg-card-light");
            cardOverview[i].classList.remove("bg-card-dark");
            cardOverview[i].setAttribute('style','background-color:hsl(227, 47%, 96%);box-shadow: 1px 1px 15px 4px hsl(0, 0%, 77%);');

        }

         for (let i = 0; i < card.length; i++){
            card[i].classList.add("bg-card-light");
            card[i].classList.remove("bg-card-dark");
            card[i].setAttribute('style','background-color:hsl(227, 47%, 96%);box-shadow: 1px 1px 15px 4px hsl(0, 0%, 77%);');
         }
         
         for (let i = 0; i < countF.length; i++ ){
             countF[i].setAttribute('style','color:hsl(230, 17%, 14%);');
         }

         for (let i = 0; i < text.length; i++ ){
            text[i].setAttribute('style','color:hsl(230, 17%, 14%);');
        }

        for (let i = 0; i < secondaryText.length; i++ ){
            secondaryText[i].classList.add("secondary-text-light");
            secondaryText[i].classList.remove("secondary-text-dark");
        }
        


        
    }

    //Dark mode
    if(check.checked == false){

        ball.setAttribute('style','transform:translatex(0%);');
        bgTop.setAttribute('style','opacity:1; transition: all 3s ease-in-out;');
        bgball.setAttribute('style','background:linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));;background-color:none;');
        body.setAttribute('style','background-color:hsl(230, 17%, 14%);');

        for (let i = 0; i < card.length; i++){
                card[i].classList.add("bg-card-dark");
                card[i].classList.remove("bg-card-light");
                card[i].setAttribute('style','background-color:hsl(228, 28%, 20%);box-shadow: 1px 1px 15px 4px hsl(0, 0%, 7%); ');
            }

        
            for (let i = 0; i < cardOverview.length; i++){
                cardOverview[i].classList.add("bg-card-dark");
                cardOverview[i].classList.remove("bg-card-light");
                cardOverview[i].setAttribute('style','background-color:hsl(228, 28%, 20%);box-shadow: 1px 1px 15px 4px hsl(0, 0%, 7%); ');
            }

         for (let i = 0; i < countF.length; i++ ){
             countF[i].setAttribute('style','color:hsl(0, 0%, 100%);');
         }

         for (let i = 0; i < text.length; i++ ){
            text[i].setAttribute('style','color:hsl(0, 0%, 100%);');
        }

        for (let i = 0; i < secondaryText.length; i++ ){
            secondaryText[i].classList.add("secondary-text-dark");
            secondaryText[i].classList.remove("secondary-text-light");
        }

        }
})



