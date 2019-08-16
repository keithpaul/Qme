export default (state = [], action) => {
    console.log(state)
    switch(action.type){        
        case "GET_CARDS":
            return action.payload;
        case "ADD_CARD":
            console.log([...state, {...action.payload}]);
            return [...state, {...action.payload}];
        default:
            return state;
    }
}