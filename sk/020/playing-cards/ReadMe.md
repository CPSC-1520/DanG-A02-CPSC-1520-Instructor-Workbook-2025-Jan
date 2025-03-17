# Playing Cards

> *Proof of Concept Demo*

This uses the [Deck of Cards API](https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1) to work with playing cards.

- [Shuffle a new deck](https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1) - Response:
  
    ```json
    {
        "success": true,
        "deck_id": "3p40paa87x90",
        "shuffled": true,
        "remaining": 52
    }
    ```

- [Draw *`?count=x`* cards from `<<deck_id>>`](https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=5)

    ```json
    {
        "success": true, 
        "deck_id": "kxozasf3edqu", 
        "cards": [
            {
                "code": "6H", 
                "image": "https://deckofcardsapi.com/static/img/6H.png", 
                "images": {
                            "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
                            "png": "https://deckofcardsapi.com/static/img/6H.png"
                        }, 
                "value": "6", 
                "suit": "HEARTS"
            }, 
            {
                "code": "5S", 
                "image": "https://deckofcardsapi.com/static/img/5S.png", 
                "images": {
                            "svg": "https://deckofcardsapi.com/static/img/5S.svg", 
                            "png": "https://deckofcardsapi.com/static/img/5S.png"
                        }, 
                "value": "5", 
                "suit": "SPADES"
            }
        ], 
        "remaining": 50
    }
    ```
