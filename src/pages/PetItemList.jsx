import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'

const PetItemList = () => {
  const [petItems, setPetItems] = useState([])

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get('http://localhost:3001/petItem')
      setPetItems(response.data)
    }
    getDetails()
  }, [])
  return (
    <div className="product-content">
      {console.log('petItems:' + petItems)}
      {petItems.map((petItem) => (
        <div className="cards" key={petItem._id}>
          {/* <Link to={`${petList._id}`}> */}
          <section className="image-container">
            <h2>{petItem.name}</h2>
            <div>
              <img src={petItem.image} />
            </div>
          </section>
          <section className="details">
            <div className="flex-row space">
              <h5>Price:{petItem.price}</h5>
            </div>
            <div>
              <h5>Description:</h5>
              <p> {petItem.Description}</p>
            </div>
          </section>
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default PetItemList
