const reducer = (state=[],action) =>{
    if(action.type==='FAVORITE_MOVIE'){
        return [...state,action.payload];
    } 
    else if(action.type==='UNFAVORITE_MOVIE'){
        return state.filter((movieId)=>movieId!==action.payload);
    }
    else{
        return state;
    }
}

export default reducer;