const initialState = {
    beers: []
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BEERS":
            return {...state, beers: action.payload}
        default:
            return {...state}
    }
}