import { useEffect } from "react"
import { getBeers } from '../action/actionBrewer'
import { connect } from 'react-redux'
import { BeerCard } from "../components"

function BeerList({getBeers, beers}){
    useEffect(getBeers, [getBeers])

    return <div className="drinks">
        {beers.map(beer => <BeerCard {...beer} key={beer.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {beers: state.beers}
}

export default connect(mapStateToProps, { getBeers}) (BeerList)