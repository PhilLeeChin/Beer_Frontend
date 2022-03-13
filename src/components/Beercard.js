import { Link } from 'react-router-dom'

export default function BeerCard({id, name, description, alcoholLvl, country, yrMade}){
    return <div className="drinks">
        <Link to={`/beers/${id}`}><h3>{name}</h3></Link>
        <p>{description}</p>
        <p>{country}</p>
        <p>{alcoholLvl}</p>
        <p>{yrMade}</p>
    </div>
}