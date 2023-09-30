// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {imageUrl, name, description} = eachPlanet
  return (
    <>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </>
  )
}

export default PlanetItem
