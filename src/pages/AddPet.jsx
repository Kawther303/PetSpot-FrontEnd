import { useState } from 'react'
import { AddPet } from '../services/Adds'
import { useNavigate } from 'react-router-dom'

const NewPet = () => {
  const petTypes = ['Dog', 'Cat', 'Bird', 'Fish', 'Hamster']
  let navigate = useNavigate()
  const formInit = {
    name: '',
    age: '',
    petType: [],
    Description: '',
    forAdoption: false,
    image: null,
    price: '',
    available: true
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
    formData.append('age', formValues.age)
    formData.append('petType', formValues.petType)
    formData.append('Description', formValues.Description)
    formData.append('forAdoption', formValues.forAdoption)
    formData.append('image', formValues.image)
    formData.append('price', formValues.price)
    formData.append('available', formValues.available)
    try {
      const response = await AddPet(formData)

      navigate('/pets')
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
        <h1 className="form-heading">Add New Pet</h1>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Pet Name"
            value={formValues.name}
            required
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="age">Age</label>
          <input
            onChange={handleChange}
            name="age"
            type="text"
            placeholder="1 month"
            value={formValues.age}
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="petType">Type</label>
          <select
            onChange={handleChange}
            name="petType"
            value={formValues.petType}
          >
            {petTypes.map((pType) => (
              <option value={pType}>{pType}</option>
            ))}
          </select>
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="Description">Description</label>
          <input
            onChange={handleChange}
            name="Description"
            type="text"
            placeholder=""
            value={formValues.Description}
            className="form-control"
          />
        </div>
        <br></br>
        <div className="col-md-10">
          <label htmlFor="forAdoption">forAdoption</label>
          <select
            onChange={handleChange}
            name="forAdoption"
            value={formValues.forAdoption}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
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
        <div className="col-md-10">
          <label htmlFor="available">Available?</label>
          <select
            onChange={handleChange}
            name="available"
            value={formValues.available}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
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

export default NewPet
