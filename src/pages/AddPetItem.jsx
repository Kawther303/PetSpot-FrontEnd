import { useState } from 'react'
import { AddPetItem } from '../services/Adds'
import { useNavigate } from 'react-router-dom'

const NewPetItem = () => {
  const units = ['Unit', 'Box', 'Bag', 'Kg', 'Pice', 'Sheet']
  const petTypes = [
    'Dog',
    'Cat',
    'Bird',
    'Fish',
    'Hamster',
    'Other',
    'No Specific',
    'Food'
  ]
  let navigate = useNavigate()
  const formInit = {
    name: '',
    unit: '',
    itemType: [],
    brand: '',
    image: null,
    price: '',
    qtyAvailable: 0,
    description: ''
  }
  const [formValues, setFormValues] = useState(formInit)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      image: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formValues.name)
    formData.append('unit', formValues.unit)
    formData.append('itemType', formValues.itemType)
    formData.append('brand', formValues.brand)
    formData.append('image', formValues.image)
    formData.append('qtyAvailable', formValues.qtyAvailable)
    formData.append('price', formValues.price)
    formData.append('description', formValues.description)
    try {
      const response = await AddPetItem(formData)

      navigate('/petItems')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="addForm">
      <form
        className="col form-style"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="form-heading">Add New Item</h1>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Item Name"
            value={formValues.name}
            required
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="unit">unit</label>
          <select onChange={handleChange} name="unit" value={formValues.unit}>
            {units.map((unit) => (
              <option value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="petType">Type</label>
          <select
            onChange={handleChange}
            name="itemType"
            value={formValues.itemType}
          >
            {petTypes.map((pType) => (
              <option value={pType}>{pType}</option>
            ))}
          </select>
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="description"
            value={formValues.description}
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="brand">Brand</label>
          <input
            onChange={handleChange}
            name="brand"
            type="text"
            placeholder="Brand Name"
            value={formValues.brand}
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="qtyAvailable">Available Quantity</label>
          <input
            onChange={handleChange}
            name="qtyAvailable"
            value={formValues.qtyAvailable}
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="image">Image</label>
          <input
            onChange={handlePicChange}
            name="image"
            type="file"
            accept="image/*"
            required
            className="form-control"
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="price">Price</label>
          <input
            onChange={handleChange}
            name="price"
            type="Number"
            placeholder="0"
            value={formValues.price}
            required
            className="form-control"
          />
        </div>
        <br></br>
        <button
          disabled={
            !formValues.name || (!formValues.image && !formValues.price)
          }
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default NewPetItem
