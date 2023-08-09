import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function CompForm() {

  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    contact: '',
    select: ''
  })

  const [isSelect, setisSelect] = useState()

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleSelect = (e) => {
    console.log(e.target.value);
    setisSelect(e.target.value)
  }
  console.log(isSelect);

  // console.log(isSelect);

  return (
    <>
      <div className='container border border-1 mx-auto'>
        <form className='row p-4'>
          <div className='w-50 col-6 mb-4 form-group'>
            <label>First Name</label><br />
            <input type='text' className='form-control' name='fname' value={data.fname} onChange={handleChange} required/>
          </div>

          <div className='w-50 col-6 mb-4 form-group'>
            <label>Last Name</label><br />
            <input type='text' className='form-control' name='lname' value={data.lname} onChange={handleChange} required />
          </div>

          <div className='w-50 col-6 mb-4 form-group'>
            <label>How should we contact you?</label><br />
            <select value={isSelect} className="form-control" placeholder='Choose Option' onChange={handleSelect} required>
              <option selected disabled>Choose Option</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </div>

          {isSelect === "Phone" && <div className='w-50 col-6 mb-4 form-group '>
            <label>Phone</label><br />
            <input type='number' className='form-control' name='number' value={data.email} onChange={handleChange} required/>
          </div>}

          {isSelect === "Email" && <div className='w-50 col-6 mb-4 form-group '>
            <label>Email</label><br />
            <input type='email' className='form-control' name='email' value={data.email} onChange={handleChange} required/>
          </div>}

        </form>
      </div>


    </>
  )
}

export default CompForm