import { Deck } from './card-provider';

const showCard = function(cardInfo) {
    let imgSrc = cardInfo.image;

    const container = document.getElementById('hand');

    let html = `<img src="${imgSrc}" alt="${cardInfo.value} of ${cardInfo.suit}" />`;

    container.innerHTML += html;
}


const myDeck = await new Deck();
await myDeck.shuffle();
let cards = await myDeck.drawCards(5);

cards.forEach(function(card) {
    showCard(card);
});
