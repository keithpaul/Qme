
export const addCard = (cardData)=>{
	return (dispatch)=>{
		dispatch({type:'ADD_CARD', payload:cardData});
	};
} 
