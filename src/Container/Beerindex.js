import { useEffect } from "react"
import { getBeers } from '../action/actionBrewer'
import { connect } from 'react-redux'

function BeerIndex(props){

    useEffect (() => props.getBeers())
    return<h1>List your beers!</h1>
}

const mapStateToProps = (state) => {
    return {beers: state.beers}
}

export default connect(null, { getBeers}) (BeerIndex)