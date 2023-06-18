export const favoriteMovie = (movieId) => {
    return (dispatch) =>{
        dispatch({
            type: 'FAVORITE_MOVIE',
            payload: movieId,
        })
    }
} 

export const unfavoriteMovie = (movieId) => {
    return (dispatch) =>{
        dispatch({
            type: 'UNFAVORITE_MOVIE',
            payload: movieId,
        })
    }
} 