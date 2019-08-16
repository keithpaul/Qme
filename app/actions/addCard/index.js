

const ADD_CARD = "ADD_CARD";

export function addCard(cardData){
    return{
        type: ADD_CARD,
        cardData
    }
}