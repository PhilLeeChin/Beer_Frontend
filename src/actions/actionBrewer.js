export const getBeers = () => {
    return dispatch => fetch("http://localhost:3001/beers")
    .then(res => res.json())
    .then(beers => dispatch({type: "GET_BEERS", payload: beers}))
}

export const getBeer = (id) => {
    return dispatch => fetch(`http://localhost:3001/beers/${id}`)
    .then(res => res.json())
    .then(beer => dispatch({type: "GET_BEER", payload: beer}))
}