import React, { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBeer } from "../actions/actionBrewer"


function BeerShow({getBeer, name, description, country, alcoholLvl,yrMade}){
    const routeId = useParams().id
    useEffect(() => {
        getBeer(routeId)
    }, [getBeer, routeId])

    return <div className="self">
        <h3>Beer: {name}</h3> 
        <p>Fun Fact: {description}</p>
        <p>Country made: {country}</p>
        <p>Alcohol Level: {alcoholLvl}</p>
        <p>Year created: {yrMade}</p>
    </div>
}

const mapStateToProps = (state) => {
    return {...state.grabBeer}
}

export default connect(mapStateToProps, {getBeer})(BeerShow)