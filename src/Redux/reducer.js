const initialBeer = {
    name: "",
    description: "",
    alcoholLvl: null,
    country: "",
    yrMade: null,
    id: null,
    styles: []
}

const initialUser = {
    username:"",
}

const initialState = {
    beers: [],
    grabBeer: initialBeer,
    user: initialUser
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "SET_USER":
            return {...state, user: action.payload};
        case "GET_BEERS":
            return {...state, beers: action.payload};
        case "GET_BEER":
            return {...state, grabBeer: action.payload};
        case "CLEAR_BEER":
            return {...state, grabBeer: initialBeer};
        case "ADD_STYLE":
            return {...state, grabBeer: {...state.grabBeer, styles: [action.payload, ...state.grabBeer.styles]}};
        case "LOGOUT":
            return {...state, user: initialUser}
        default:
            return {...state}
    }
}