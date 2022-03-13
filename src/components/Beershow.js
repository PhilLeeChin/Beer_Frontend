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
        <h3>{name}</h3> 
        <p>{description}</p>
        <p>{country}</p>
        <p>{alcoholLvl}</p>
        <p>{yrMade}</p>
    </div>
}

const mapStateToProps = (state) => {
    return {...state.grabBeer}
}

export default connect(mapStateToProps, {getBeer})(BeerShow)