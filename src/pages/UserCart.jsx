import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UserCart = ({ user }) => {
  console.log('user.id:', user.id)

  const [cartStat, setCart] = useState('')
  const [itemsStat, setItems] = useState('')
  const [petStat, setPets] = useState('')
  let cart
  let items
  let pets
  // const [cartItems, setCartItems] = useState('')

  useEffect(() => {
    getDetails()
  }, [])

  let finalList = []
  const imagePath = `http://localhost:3001/`
  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  const getDetails = async () => {
    const theCart = await axios.get(`http://localhost:3001/cart/${user.id}`)
    // console.log(theCart.data)
    setCart(theCart.data)
    cart = theCart.data
    // console.log('cart:', cart)

    setItems(theCart.data.itemId)
    setPets(theCart.data.petId)

    items = theCart.data.itemId
    pets = theCart.data.petId
    // console.log('petttsss2:', pets)
    getTheItems()
    console.log('final:', finalList)
  }
  let itemList = []
  // count the items
  const getItemsQuantity = async (theItem) => {
    console.log('theItem1._id:', theItem)
    const arr = itemList //cart.itemId
    const elementToCount = theItem
    let count = arr.filter((x) => x == elementToCount).length
    console.log('ccccccc:', count)
    return count
  }

  //get the items details and unique
  const getTheItems = () => {
    const theCartItems = items //cart.itemId

    for (let c = 0; c < theCartItems.length; c++) {
      itemList.push(theCartItems[c]._id)
    }

    console.log('itemList:', itemList)
    console.log('items:', items)
    let result = []
    let k = []
    let container = {}
    let found = false
    let itemCount
    for (let i = 0; i < itemList.length; ++i) {
      found = false
      itemCount = 1
      for (let x = 0; x < k.length; x++) {
        if (itemList[i] == k[x]) {
          found = true
          itemCount = itemCount + 1
        }
      }
      if (!found) {
        k.push(itemList[i])
        let theItem1 = theCartItems.find((obj) => obj._id === itemList[i])
        console.log('theItem1:::', theItem1)

        finalList.push({
          id: theItem1._id,
          name: theItem1.name,
          price: theItem1.price,
          image: theItem1.image,
          qty: getItemsQuantity(theItem1._id),
          unit: theItem1.unit,
          theType: 'Item',
          description: theItem1.description
        })
      }
      console.log('count22:', itemCount)
    }

    console.log('kkkkk:', k)
    console.log('count:', itemCount)
    console.log('peeets:', pets)

    for (let i = 0; i < pets.length; i++) {
      let thePet1 = pets[i]
      console.log('peeets:', thePet1)
      finalList.push({
        id: thePet1._id,
        name: thePet1.name,
        price: thePet1.price,
        image: thePet1.image,
        qty: 1,
        unit: '',
        theType: 'Pet',
        description: thePet1.description
      })
    }
    console.log(finalList)
  }

  if (itemList.length > 0) {
    return (
      <div className="product-content">
        <div className="header">
          <div className="header">Item Picture </div>
          <div className="header">Type</div>
          <div className="header">Name</div>
          <div className="header">price</div>
          <div className="header">Quantity</div>
          <div className="header">+1</div>
          <div className="header">-1</div>
          <div className="header">DEL</div>
        </div>
        {finalList.map((item) => (
          <div className="listDetails" key={item}>
            <div>
              <img src="" />

              {/* <img src={`${imagePath}${item.image.replace('public/', '')}`} />
               */}
            </div>
            <div>{item.theType}</div>
            <div>{item.name}</div>
            <div>{item.price} </div>
            <div>{item.qty}</div>
            <div>
              <button value="plus" onClick={handleClick}>
                +
              </button>
            </div>

            <div>
              <button value="min" onClick={handleClick}>
                -
              </button>
            </div>
            <div>
              <button value="del" onClick={handleClick}>
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h1>No cart</h1>
      </div>
    )
  }
}

export default UserCart
