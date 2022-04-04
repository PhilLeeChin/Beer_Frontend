import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { getBeers } from '../actions/actionBrewer'
import BeerCard from '../components/Beercard'

function BeerList({getBeers, beers}){
    useEffect(getBeers, [getBeers])

    return <div className="cards">
        {beers.map(beer => <BeerCard {...beer} key={beer.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {beers: state.beers}
}

export default connect(mapStateToProps, { getBeers})(BeerList)