import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { AddCartItem } from '../services/Pet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PetItemDetails = ({ user }) => {
  let navigate = useNavigate()
  const [petItem, setPetItem] = useState(null)

  let { id } = useParams()
  console.log(id)
  const imagePath = `http://localhost:3001/`
  console.log(user)
  const addToCart = async (event) => {
    try {
      // const response = await AddCartItem(user._id)
      if (user) {
        const response = await axios.put(
          `http://localhost:3001/cart/addItem/${user.id}/${event.target.value}`
        )
        // // navigate('/userCart')
        // console.log(response)
        navigate('/pet')
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
      const response = await axios.get(`http://localhost:3001/petItem/${id}`)
      console.log(response)
      setPetItem(response.data)
    }
    getDetails()
  }, [])
  return petItem ? (
    <div className="product-content">
      <div className="cards" key={petItem._id}>
        <section className="image-container2 ">
          <h2>{petItem.name}</h2>
          <div>
            <img src={`${imagePath}${petItem.image.replace('public/', '')}`} />
          </div>
        </section>
        <section className="details">
          <div className="flex-row space">
            <h5>Price:{petItem.price}</h5>
          </div>
          <div>
            <h5>Description:</h5>
            <p> {petItem.description}</p>
          </div>
        </section>
      </div>
      <button value={petItem._id} onClick={addToCart}>
        Add to Cart
      </button>
      <Link to="/petItems">
        <button>Back</button>
      </Link>
    </div>
  ) : null
}

export default PetItemDetails
