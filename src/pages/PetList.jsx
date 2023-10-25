import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const PetList = () => {
  const [petsList, setPetsList] = useState([])
  const imagePath = `http://localhost:3001/`

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get('http://localhost:3001/pet')
      console.log(response.data)
      setPetsList(response.data)
    }
    getDetails()
  }, [])
  return (
    <body>
      
   
    <div className="product-content">
      {console.log('petsList:' + petsList)}
      {petsList.map((petList) => (
        <div className="cards" key={petList._id}>
          <Link to={`${petList._id}`}>
            <section className="image-container">
              <h2>{petList.name}</h2>
              <div>
                <img
                  src={`${imagePath}${petList.image.replace('public/', '')}`}
                />
              </div>
            </section>
            <section className="details">
              <div className="flex-row space">
                <h5>Price:{petList.price}</h5>
              </div>
              <div>
                <h5>Description:</h5>
                <p> {petList.Description}</p>
              </div>
            </section>
          </Link>
        </div>
      ))}
    </div> 
    </body>
  )
}

export default PetList
