const api = 'https://deckofcardsapi.com/api/deck/'; //<<deck_id>>/draw/?count=2';

const buildShuffleUrl = function(deckId) {
    return `${api}${deckId}/shuffle/?deck_count=1`;
    // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
}

const buildDrawUrl = function(deckId, count) {
    return `${api}${deckId}/draw/?count=${count}`;
}

const fetchData = async function(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

const Deck = function (deckId = 'new') {
    this.deckId = deckId;
    this.shuffle = async function() {
        let data = await fetchData(buildShuffleUrl(deckId));
        this.deckId = data.deck_id;
    }
    this.drawCards = async function (count) {
        let data = await fetchData(buildDrawUrl(this.deckId, count));
        return data.cards;
    }
}

export { Deck }
