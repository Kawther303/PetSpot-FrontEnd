import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PetDetails = ({ user }) => {
  let navigate = useNavigate()
  const [pet, setPet] = useState(null)

  let { id } = useParams()
  console.log(id)
  const imagePath = `http://localhost:3001/`
  console.log(user)
  const addToCart = async (event) => {
    try {
      if (user) {
        const response = await axios.put(
          `http://localhost:3001/cart/addPet/${user.id}/${event.target.value}`
        )

        navigate('/userCart')
      } else {
        console.log('no User')
        navigate('/signin')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(`http://localhost:3001/pet/${id}`)
      console.log(response)
      setPet(response.data)
    }
    getDetails()
  }, [])
  return pet ? (
    <div className="detail">
      <div className="updetails"></div>
      <div className="detail-header">
        <div>
          <img src={`${imagePath}${pet.image.replace('public/', '')}`} />
        </div>

        <div className="listing-name">
          <div>
            <h2>{pet.name}</h2>
          </div>
          <div className="info">
            <div>
              <h5>Price: BD {pet.price}</h5>
            </div>
            <div>
              <h5>Type: {pet.petType}</h5>
            </div>
          </div>
          <div>
            <div className="buttom">
              <button className="add2Cart" value={pet._id} onClick={addToCart}>
                Add to Cart
              </button>
              <Link to="/pets">
                <button className="add2Cart-b">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrapper">
        <div className="listing-header"></div>
        <h5>Description:</h5>
        <p> {pet.description}</p>
        <h5>Age: {pet.age}</h5>
        <h5>For Adoption:{pet.forAdoption} </h5>
      </div>
    </div>
  ) : null
}

export default PetDetails
