import React from 'react'
import { Link } from 'react-router-dom';


export default function BeerCard({id, name, alcoholLvl}){
    return<div className="drinks">
        <Link to={`/beers/${id}`}><h3>Beer: {name}</h3></Link>
        <p>Alcohol Level: {alcoholLvl}</p>
    </div>
}