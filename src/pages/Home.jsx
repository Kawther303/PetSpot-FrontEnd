import { useNavigate } from 'react-router-dom'

import Cat from '../assets/cat.svg'
import catV from '../assets/catV.mp4'
import catC from '../assets/catC.mp4'
import Dogy from '../assets/Dogy.mp4'
import foots from '../assets/foots.png'
const Home = ({ user }) => {
  let navigate = useNavigate()
  if (!user) {
    return (
      <div className="home-container2">
        <div className="first">
          <div>
            <button onClick={() => navigate('/signin')}>
              Click Here To Get Started
            </button>
            <section>
              <div className="logo">
                PetSp
                <img src={foots} alt="cat" className="cat-svg" />t
              </div>
            </section>
          </div>
        </div>
        <div className="vd">
          <video className="videoTag" autoPlay loop muted>
            <source src={Dogy} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  } else {
    return (
      <div className="home-container2">
        <div className="first">
          <div>
            <section>
              {/* <div></div> */}
              <div className="logo">
                PetSp
                <img src={foots} alt="cat" className="cat-svg" />t
              </div>
            </section>
          </div>
        </div>
        <div className="vd">
          <video className="videoTag" autoPlay loop muted>
            <source src={Dogy} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }
}

export default Home
