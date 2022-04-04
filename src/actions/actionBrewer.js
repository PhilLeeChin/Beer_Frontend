export const getBeers = () => {
    return dispatch => fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => dispatch({ type: 'GET_BEERS', payload: beers}))
  }

export const getBeer = (id) => {
    return dispatch => fetch(`http://localhost:3001/beers/${id}`)
    .then(res => res.json())
    .then(beer => dispatch({type: "GET_BEER", payload: beer}))
}

export const clearBeer = () => ({type: "CLEAR_BEER"})

export const submitRegister = (user) => {
    return dispatch => fetch("http://localhost:3001/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => handleUserResponse(res, dispatch))
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3001/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => handleUserResponse(res, dispatch))
}

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3001/me", {
        headers: {
            'Authorization': localStorage.token
        }
    })
    .then(res => handleUserResponse(res, dispatch))
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}

export const addBeer = beer => {
    return dispatch => fetch("http://localhost:3001/beers", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify(beer)
    })
    .then(res => res.json())
    .then(beer => dispatch({type: "ADD_BEER", payload: beer}))
}

export const addStyle = (style, beerId) => {
   return dispatch => fetch(`http://localhost:3001/beers/${beerId}/styles`, {
     method: 'POST', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': localStorage.token
     },
     body: JSON.stringify(style)
   })
    .then(res => {
        if (res.ok) {
            res.json().then(style => dispatch({type: "ADD_STYLE", payload: style}))
        } else {
            res.json().then(res => alert(res.errors))
        }
    })
 }

 export const deleteBeer = (beer_id) => {
    //debugger
    return dispatch => fetch(`http://localhost:3001/beers/${beer_id}`, {
      method: 'DELETE', 
      headers: {
        'Content_Type': 'application/json',
      }, 
    }) 
      .then(() => dispatch({type: "DELETE_BEER"}))
  }

  function handleUserResponse(res, dispatch){
    if (res.ok) {
        res.json()
       .then(response => {
           localStorage.token = response.token
           dispatch({type: "SET_USER", payload: response.user})
       })
   } else {
       res.json()
       .then(res => alert(res.errors))
       }
  }