import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
      if (user) {
        const response = await axios.put(
          `http://localhost:3001/cart/addItem/${user.id}/${event.target.value}`
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
      const response = await axios.get(`http://localhost:3001/petItem/${id}`)
      console.log(response)
      setPetItem(response.data)
    }
    getDetails()
  }, [])

  return petItem ? (
    <div className="detail">
      <div className="updetails"></div>
      <div className="detail-header">
        <div>
          <img
            className="imgDetails"
            src={`${imagePath}${petItem.image.replace('public/', '')}`}
          />
        </div>

        <div className="listing-name">
          <div>
            <h2>{petItem.name}</h2>
          </div>
          <div className="info">
            <div>
              <h5>Price: BD {petItem.price}</h5>
            </div>
            <div>
              <h5>Unit: {petItem.unit}</h5>
            </div>
          </div>
          <div>
            <div className="buttom">
              <button
                className="add2Cart"
                value={petItem._id}
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <Link to="/petItems">
                <button className="add2Cart-b">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrapper">
        <div className="listing-header"></div>
        <h5>Description:</h5>
        <p> {petItem.description}</p>
        <h5>Available Quality: {petItem.qtyAvailable}</h5>
      </div>
    </div>
  ) : null
}

export default PetItemDetails
