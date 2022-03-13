export default function BeerCard({name, description, alcoholLvl, country, yrMade}){
    return <div className="drinks">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{country}</p>
        <p>{alcoholLvl}</p>
        <p>{yrMade}</p>
    </div>
}