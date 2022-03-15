const initialBeer = {
    grabBeer: {
        name: "",
        description: "",
        alcoholLvl: null,
        country: "",
        yrMade: null,
    }
}

// const initialUser = {
//     username:"",

// }

const initialState = {
    beers: [],
    grabBeer: initialBeer,
    user: {
        username: ""
    }
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BEERS":
            return {...state, beers: action.payload}
        case "GET_BEER":
            return {...state, grabBeer: action.payload}
        default:
            return {...state}
    }
}