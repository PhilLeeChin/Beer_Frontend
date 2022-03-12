export const getBeers = () => {
    return dispatch => fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => dispatch({type: "GET_BEERS", payload: beers}))
}