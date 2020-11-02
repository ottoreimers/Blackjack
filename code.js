// console.log(cards);

// Skapa ett kort och lägg till på skärmen. Vi vill skapa en img tag.
// const card = document.createElement('img');
// card.src = 'img/jack_of_diamonds2.png';
// card.width = '200';
// card.height = '290';

// document.querySelector('.cards').appendChild(card);

// Uppgift: Skriv en funktion addNewRandomCard som genererar ett slumpat kort
// från arrayen. Den ska retunera ett objekt från cards.js

function addNewRandomCard() {
  // let randomIndex = Math.floor(Math.random() * cards.length -1);

  let randomNum = Math.random(); // 0.0 0.1 0.125431 => 0.9999...
  let randomNum2 = randomNum * cards.length - 1; // 0.0 -> 0.9999 * 52 = 5,2 (0.1 * 52 = 5,2)
  let randomNum3 = Math.floor(randomNum2); // 5,2 -> 5

  let card = cards[randomNum3];
  return card;
}

// Uppgift: Skapa en knapp som anropar addNewRandomCard och sen visar
// kortet på skärmen.
let cardSum = 0;
document.querySelector("#draw").addEventListener("click", () => {
  const cardObject = addNewRandomCard();
  const cardImg = document.createElement("img");
  cardImg.src = `img/${cardObject.file}`;
  cardImg.width = "150";
  cardImg.height = "190";
  document.querySelector(".cards").appendChild(cardImg);
  // Uppgift: skapa en variabel som håller reda på summan av korten.
  // Logga summan med console.log
  cardSum += cardObject.num;

  if (cardSum > 21) {
    document.querySelector('.info').textContent = `Du blev tjock! Du fick ${cardSum}`;
  }


});

document.querySelector('#stop')
.addEventListener('click', () => {
  document.querySelector('.info').textContent = `Du stannade på ${cardSum}`;
})