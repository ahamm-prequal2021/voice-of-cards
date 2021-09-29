const suits = ['Heart', 'Club', 'Diamond', 'Spades'],
    values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let deck = [],
    handP1 = [],
    handP2 = [],
    handP3 = [],
    handP4 = [],
    pot = [],
    dump = [];
let nth = 1,
    e,
    x;

// CREATE DECK
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// SHUFFLE DECK
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log(deck);
    
document.querySelector(".board__remain--counter").innerHTML = deck.length;

// START GAME

function start(){
    document.querySelector('.board__start').style.display = 'none';
    // let startCard = setTimeout(function(){
    //     // document.addEventListener('click', function(){
    //     //     alert('Hello');
    //     //     return;
    //     // });
    // }, 300);
    // function translate(){
    //     setTimeout(function(){
    //         console.log('true');
    //         document.querySelector('.board__players').style.transform = 'translateX(0)';
    //         setTimeout(function(){
    //             console.log('true2');
    //             document.querySelector('.board__players').style.transform = 'translateX(-25%)';
    //             setTimeout(function(){
    //                 console.log('true3');
    //                 document.querySelector('.board__players').style.transform = 'translateX(-50%)';
    //                 setTimeout(function(){
    //                     console.log('true4');
    //                     document.querySelector('.board__players').style.transform = 'translateX(-75%)';
    //                     translate();
    //                 }, 1000);
    //             }, 1000);
    //         }, 1000);
    //     },1000)
    // }
    // translate();
}

// GET CARDS VALUES & SUITS

function cardValues(){
    if(e[e.length-1].Value == '1'){
        document.querySelector(x).innerHTML = 'Ace of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '2'){
        document.querySelector(x).innerHTML = '2 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '3'){
        document.querySelector(x).innerHTML = '3 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '4'){
        document.querySelector(x).innerHTML = '4 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '5'){
        document.querySelector(x).innerHTML = '5 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '6'){
        document.querySelector(x).innerHTML = '6 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '7'){
        document.querySelector(x).innerHTML = '7 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '8'){
        document.querySelector(x).innerHTML = '8 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '9'){
        document.querySelector(x).innerHTML = '9 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '10'){
        document.querySelector(x).innerHTML = '10 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
}

// DROP CARDS TO YARD

function drawCard(){
    if(document.querySelector('.card1').innerHTML !== "" && document.querySelector('.card2').innerHTML !== "" && document.querySelector('.card3').innerHTML !== "" && document.querySelector('.card4').innerHTML !== "" && document.querySelector('.card5').innerHTML !== "" && document.querySelector('.card6').innerHTML !== "" && document.querySelector('.card7').innerHTML !== ""){
        if(document.querySelector('.board__player1--hand>.cardHand1').innerHTML !== "" && document.querySelector('.board__player1--hand>.cardHand2').innerHTML !== "" && document.querySelector('.board__player1--hand>.cardHand3').innerHTML !== ""){
            return;
        }else{
            e = handP1;
            handP1.push(deck.pop());
            document.querySelector(".board__remain--counter").innerHTML = deck.length;
            if(document.querySelector('.board__player1--hand>.cardHand'+String(nth)).innerHTML === ""){
                x = '.board__player1--hand>.cardHand'+String(nth);
                cardValues();
                nth = 1;
            }else{
                let cardContent = setInterval(function(){
                    if(document.querySelector('.board__player1--hand>.cardHand'+String(nth)).innerHTML === ""){
                        x = '.board__player1--hand>.cardHand'+String(nth);
                        cardValues();
                        nth = 1;
                        clearInterval(cardContent);
                    }else{
                        nth++;
                    }
                })
            }
        }
        return;
    }else{
        e = pot;
        pot.push(deck.pop());
        document.querySelector(".board__remain--counter").innerHTML = deck.length;
        // console.log(pot);
        if(document.querySelector('.card'+String(nth)).innerHTML === ""){
            x = '.card'+String(nth);
            cardValues();
            nth = 1;
        }else{
            let cardContent = setInterval(function(){
                if(document.querySelector('.card'+String(nth)).innerHTML === ""){
                    x = '.card'+String(nth);
                    cardValues();
                    nth = 1;
                    clearInterval(cardContent);
                }else{
                    nth++;
                }
            })
        }
    }
}

// function getImage(valeur){ // associe une valeur à une image
//     let face = "./src/img/";
//     switch(valeur){
//         case 1 : face += "death.png";
//         break;
//         case 2 : face += "life.png";
//         break;
//         case 3 : face += "love.png";
//         break;
//         case 4 : face += "hate.png";
//         break;
//         case 5 : face += "honor.png";
//         break;
//         case 6 : face += "shame.png";
//         break;
//         case 7 : face += "war.png";
//         break;
//         case 8 : face += "peace.png";
//         break;
//         case 9 : face += "peace.png";
//         break;
//         case 10 : face += "peace.png";
//         break;
//         default : console.log("cas non pris en compte")
//     }
//     return face;
// }





// FIN DU GAME


// let test = setInterval(function(){
//     dump.push(deck.pop());
//     document.querySelector(".board__remain--counter").innerHTML = deck.length;
//     // console.log(dump);
//     // console.log(deck);
//     if(deck.length == 0){
//         clearInterval(test);
//         // document.querySelector(".board").innerHTML = 'The End';
//         setTimeout(function(){
//             alert('The End');
//         }, 3000);
//     }
// }, 3000);