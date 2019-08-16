import ADD_CARD from '../../actions/addCard';

const initialState = {
    cards: [{question: "Question 1", answer: "Answer 1"},{question: "Question 2", answer: "Answer 2"}]    
}

export default (state = [], action) => {
    console.log(action.payload);
    switch(action.type){        
        case "GET_CARDS":
            return action.payload;
        
        case ADD_CARD:
            return [...state, ...action.payload];

        default:
            return initialState;
    }
}