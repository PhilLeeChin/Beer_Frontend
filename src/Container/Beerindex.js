import { useEffect } from "react"
import { getBeers } from '../action/actionBrewer'
import { connect } from 'react-redux'
import BeerCard from "../components/BeersCard"

function BeerIndex({getBeers, beers}){
    useEffect (() => beers.length === 0 && getBeers(), [beers])

    return <div className="drinks">
        {beers.map(beer => <BeerCard {...beer} key={beer.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {beers: state.beers}
}

export default connect(mapStateToProps, { getBeers}) (BeerIndex)