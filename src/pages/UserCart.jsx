import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AddOrder } from '../services/Adds'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const UserCart = ({ user }) => {
  console.log('user.id:', user.id)
  let navigate = useNavigate()
  let itemList = []
  let [cartStat, setCart] = useState(null)
  let [itemsStat, setItems] = useState(null)
  let [petsStat, setPets] = useState(null)
  let [theFinal, setFinal] = useState(null)
  let cart
  let items
  let pets
  let [iQty, setIQty] = useState(0)
  let [iPrice, setIPrice] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)
  let [grantTotal, setGrantTotal] = useState(0)
  let naj
  let finalList = []
  let theTotalAmount = 0
  useEffect(() => {
    getDetails()
  }, [iQty])

  const imagePath = `http://localhost:3001/`

  const handleAdd = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    if (e.target.value === 'Item') {
      reduceItem(e.target.id)
    } else if (e.target.value === 'Item') {
      addItem(e.target.id)
    }
  }

  const handleClick = async (e, operation, theQty) => {
    if (operation === 'Add' && e.target.value === 'Item') {
      console.log('Add')
      addItem(e.target.id)
      setIQty(theQty + 1)
    } else if (operation === 'Reduce' && e.target.value === 'Item') {
      reduceItem(e.target.id)
      console.log('min')
      setIQty(theQty - 1)
    } else if (operation === 'Reduce' && e.target.value === 'Pet') {
      reducePet(e.target.id)
      setIQty(theQty - 1)
      console.log('min')
    } else if (operation === 'Add' && e.target.value === 'Pet') {
      addPet(e.target.id)
      setIQty(theQty + 1)
      console.log('Add')
    }
  }
  const reduceItem = async (delItem) => {
    const response = await axios.get(
      `http://localhost:3001/cart/delItem/${user.id}/${delItem}`
    )
    console.log(response)
  }

  const addItem = async (plusItem) => {
    const response = await axios.put(
      `http://localhost:3001/cart/addItem/${user.id}/${plusItem}`
    )
    console.log(response)
  }

  const reducePet = async (delItem) => {
    const response = await axios.get(
      `http://localhost:3001/cart/delPet/${user.id}/${delItem}`
    )
    console.log(response)
  }

  const addPet = async (plusItem) => {
    const response = await axios.put(
      `http://localhost:3001/cart/addPet/${user.id}/${plusItem}`
    )
    console.log(response)
  }

  const getDetails = async () => {
    const response = await axios.get(`http://localhost:3001/cart/${user.id}`)

    cart = response.data
    setCart(cart)

    setItems(response.data.itemId)
    setPets(response.data.petId)

    items = response.data.itemId
    pets = response.data.petId

    getTheItems()
    console.log('final:', finalList)
  }

  //get the items details and unique
  const getTheItems = () => {
    //const theCartItems = items

    for (let c = 0; c < items.length; c++) {
      itemList.push(items[c]._id)
    }

    let k = []
    let found = false
    let itemCount
    for (let i = 0; i < itemList.length; ++i) {
      found = false
      for (let x = 0; x < k.length; x++) {
        if (itemList[i] == k[x]) {
          found = true
        }
      }
      if (!found) {
        k.push(itemList[i])
        let theItem1 = items.find((obj) => obj._id === itemList[i])

        //count the item quantity
        const arr = itemList
        const elementToCount = theItem1._id
        let theQty = arr.filter((x) => x == elementToCount).length
        let id2 = theItem1._id + i
        finalList.push({
          id2: id2,
          id: theItem1._id,
          name: theItem1.name,
          price: theItem1.price,
          image: theItem1.image,
          qty: theQty,
          unit: theItem1.unit,
          theType: 'Item',
          totalPrice: theItem1.price * parseInt(theQty),
          description: theItem1.description
        })
      }
    }

    for (let i = 0; i < pets.length; i++) {
      let thePet1 = pets[i]
      let id2 = thePet1._id + i
      finalList.push({
        id2: id2,
        id: thePet1._id,
        name: thePet1.name,
        price: thePet1.price,
        image: thePet1.image,
        qty: 1,
        unit: '',
        theType: 'Pet',
        totalPrice: thePet1.price,
        description: thePet1.description
      })
    }
    setFinal(finalList)
    cartTotalAmount()
    setGrantTotal(theTotalAmount)
  }
  const cartTotalAmount = () => {
    for (let i = 0; i < finalList.length; i++) {
      theTotalAmount = theTotalAmount + finalList[i].totalPrice
    }
  }

  const placeOrder = async (e) => {
    e.preventDefault()
    let theOrderItems = []

    theFinal.map((item) => {
      theOrderItems.push({
        itemRef: item.id,
        itemType: item.theType,
        qty: item.qty,
        price: item.price
      })
    })

    const theOrder = {
      userId: user.id,
      orderNumber: '0',
      orderItems: theOrderItems,
      totalAmount: e.target.value
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/order/newOrder',
        theOrder
      )
      console.log(response)
      const clearCart = await axios.get(
        `http://localhost:3001/cart/clear/${user.id}`
      )
      console.log(clearCart)
      navigate('/show')
    } catch (error) {
      console.log(error)
    }
  }

  if (theFinal) {
    return (
      <div className="cart-content">
        <div className="header">
          <div className="header1">Item Picture </div>
          <div className="header1">Type</div>
          <div className="header1">Name</div>
          <div className="header1">price</div>
          <div className="header1">Quantity</div>
          <div>Total Price</div>
          <div></div>
          <div></div>
        </div>
        {theFinal.map((item) => (
          <div className="listDetails" key={item.id2}>
            <div className="cartImage">
              <img
                className="cartImage"
                src={`${imagePath}${item.image.replace('public/', '')}`}
              />
            </div>
            <div>{item.theType}</div>
            <div>{item.name}</div>
            <div>{item.price} </div>
            <div>{item.qty}</div>
            <div>{item.totalPrice} </div>
            <div>
              <button
                id={item.id}
                value={item.theType}
                onClick={(e) => handleClick(e, 'Add', item.qty)}
              >
                +
              </button>
              <button
                id={item.id}
                value={item.theType}
                onClick={(e) => handleClick(e, 'Reduce', item.qty)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <div className="totalBar">
          <div>
            <h2>Grand Total: {grantTotal} </h2>
          </div>
          <div>
            <button onClick={placeOrder} value={grantTotal}>
              Place Order
            </button>
          </div>
        </div>
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
