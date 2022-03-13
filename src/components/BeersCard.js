export default function BeerCard({name, description, alcohol_lvl, country, yr_made}){
    return <div className="drinks">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{country}</p>
        <p>{alcohol_lvl}</p>
        <p>{yr_made}</p>
    </div>
}