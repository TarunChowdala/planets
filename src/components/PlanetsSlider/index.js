// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>

      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
