const initialState = {
    beers: [],
    grabBeer: {
        name: "",
        description: "",
        alcoholLvl: 0,
        country: "",
        yrMade: 0,
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