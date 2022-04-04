import React, { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBeer, clearBeer } from "../actions/actionBrewer"
import Styles from "../containers/Styles"
import StyleForm from "./StyleForm"


function BeerShow({getBeer, name, description, country, alcoholLvl, yrMade, clearBeer}){
    const routeId = useParams().id
    useEffect(() => {getBeer(routeId)
        return clearBeer
    }, [getBeer, routeId, clearBeer])

    return <div className="self">
        <h3>Beer: {name}</h3> 
        <p>Fun Fact: {description}</p>
        <p>Country made: {country}</p>
        <p>Alcohol Level: {alcoholLvl}</p>
        <p>Year created: {yrMade}</p>
        < StyleForm />
        < Styles />
    </div>
}

const mapStateToProps = (state) => {
    return {...state.grabBeer}
}

export default connect(mapStateToProps, {getBeer, clearBeer})(BeerShow)