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

export const submitRegister = (user) => {
    return dispatch => fetch("http://localhost:3001/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3001/sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then
}