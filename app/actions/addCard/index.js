

const ADD_CARD = "ADD_CARD";

export function addCard(payload){
    return{
        type: ADD_CARD,
        payload
    }
}