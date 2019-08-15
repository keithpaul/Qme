

export default (state = [], action) => {
    console.log(action.payload);
    switch(action.type){        
        case "GET_CARDS":
            return action.payload;
        
        case "ADD_CARD":
            return [...state, action.payload];
        default:
            return state;
    }
}