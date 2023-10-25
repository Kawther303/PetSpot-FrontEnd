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

        navigate('/pets')
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
    <div className="product-content">
      <div className="cards" key={pet._id}>
        <section className="image-container2 ">
          <h2>{pet.name}</h2>
          <div>
            <img src={`${imagePath}${pet.image.replace('public/', '')}`} />
          </div>
        </section>
        <section className="details">
          <div className="flex-row space">
            <h5>Price:{pet.price}</h5>
          </div>
          <div>
            <h5>Description:</h5>
            <p> {pet.description}</p>
          </div>
          <div>
            <h5>Age:</h5>
            <p> {pet.age}</p>
          </div>
          <div>
            <h5>For Adoption:</h5>
            <p> {pet.forAdoption}</p>
          </div>
        </section>
      </div>
      <button value={pet._id} onClick={addToCart}>
        Add to Cart
      </button>
      <Link to="/pets">
        <button>Back</button>
      </Link>
    </div>
  ) : null
}

export default PetDetails
