import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// import { showUser } from "../services/Auth"
import axios from "axios"


const Show = ({ user }) => {
  let navigate = useNavigate()
  const [newUser, setUserValue] = useState(null)
  const [newOrder, setUserOrders] = useState(null)
  // const [newItems, setUserItem] = useState(null)
  const imagePath = `http://localhost:3001/`
  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/auth/show/${user.id}`
    
      )
      setUserValue(response.data)
      console.log(user)
      
      const orderResponse = await axios.get(
        `http://localhost:3001/order/${user.id}`
      )
      setUserOrders(orderResponse.data)
      console.log(orderResponse.data)
      console.log(orderResponse.data.itemType)
      // setUserItem(orderResponse.data.orderItems)
      // console.log(orderResponse.orderItems)
      
      
    }
    getDetails()
  }, [])


  return newUser ? (
    <div className="signin col main-background">
      <form className="col form-style" encType="multipart/form-data">
        <h1 className="form-heading">Profile Detail</h1>
        <br />
        <div>
         <img src={`${imagePath}${newUser.profilePicture.replace('public/', '')}`} />
        </div>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input name="name" value={newUser.name} className="form-control" />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={newUser.email}
            required
            className="form-control"
          />
        </div>

        <br />
        <div className="col-md-10">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="address"
            value={newUser.address}
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="telephone">Telephone</label>
          <input
            name="telephone"
            type="telephone"
            value={newUser.telephone}
            className="form-control"
          />
          <br />
        </div>
      </form>        
      {
      newOrder?.map((order) => (
        <div className="list" key={order._id
        }>
            <h5>Order Number:{order.orderNumber}</h5>
            <h5>Total Amount:{order.totalAmount}</h5>
            {/* {newOrder.orderItems?.map((item) => (
        <div className="list" key={order._id
        }>
          
          <h5>item Type:{item.itemType}</h5>
        </div>
          ))} */}
            </div>
            ))}
          
    </div>
  ) : null
}

export default Show


// {itemRef: '6533a29f5bae9326c1dbe5ef', itemType: 'Pet', qty: 1, price: 220, _id: '6533f3c5c547a16a837aed05'



// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// // import { showUser } from "../services/Auth"
// import axios from "axios"

// const Show = ({ user }) => {
//   let navigate = useNavigate()
//   const [newUser, setUserValue] = useState(null)

//   const imagePath = `http://localhost:3001/`
//   useEffect(() => {
//     const getDetails = async () => {
//       const response = await axios.get(
//         `http://localhost:3001/auth/show/${user.id}`
//       )
//       setUserValue(response.data)
//       console.log(user)
//     }
//     getDetails()
//   }, [])


//   return newUser ? (
//     <div className="signin col main-background">
//       <form className="col form-style" encType="multipart/form-data">
//         <h1 className="form-heading">Profile Detail</h1>
//         <br />
//         <div>
//         <img src={`${imagePath}${newUser.profilePicture.replace('public/', '')}`}/>
//         </div>
//         <div className="col-md-10">
//           <label htmlFor="name">Name</label>
//           <input name="name" value={newUser.name} className="form-control" />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="email">Email</label>
//           <input
//             name="email"
//             type="email"
//             value={newUser.email}
//             required
//             className="form-control"
//           />
//         </div>

//         <br />
//         <div className="col-md-10">
//           <label htmlFor="address">Address</label>
//           <input
//             name="address"
//             type="address"
//             value={newUser.address}
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="telephone">Telephone</label>
//           <input
//             name="telephone"
//             type="telephone"
//             value={newUser.telephone}
//             className="form-control"
//           />
//           <br />
//         </div>
//       </form>
      
//     </div>
//   ) : null
// }

// export default Show

