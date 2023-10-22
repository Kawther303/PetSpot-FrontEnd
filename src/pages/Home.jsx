import { useNavigate } from 'react-router-dom'

import Cat from '../assets/cat.svg'
const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      

      <section>
        <img src={Cat} alt="cat" className='cat-svg'/>
        <button onClick={() => navigate('/signin')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home
