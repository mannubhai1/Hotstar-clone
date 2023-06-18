const reducer = (state=[],action) =>{
    if(action.type==='FAVORITE_MOVIE'){
        var favs = JSON.parse(localStorage.getItem("favs"));
        if(favs===null){
            favs=[];
        }
        if(favs.includes(action.payload)){
            favs = favs.filter((fav)=>fav!==action.payload);
        }
        else favs = [...favs,action.payload];
         localStorage.setItem("favs",JSON.stringify(favs));
        return favs;
    }
    else{
        var fav = JSON.parse(localStorage.getItem("favs"));
        if(fav===null){
            fav=[];
        }
        return fav;
    }
}

export default reducer;