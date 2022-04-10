import { useState } from 'react'

const UserDetails = () => {
  const [titleName, setTitleName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [status, setStatus] = useState('')
  const [income, setIncome] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [postcode, setPostcode] = useState('')

  return (
    <form className='submit-form'>
      <div className='form-row'>
        <div className='form-name'>
          <div className='title-name'>
            <label>Title Name</label>
            <input
              type='text'
              placeholder='Add Title Name'
              value={titleName}
              onChange={(e) => setTitleName(e.target.value)}
            />
          </div>
          <div className='first-name'>
            <label>First Name</label>
            <input
              type='text'
              placeholder='Add First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='last-name'>
            <label>Last Name</label>
            <input
              type='text'
              placeholder='Add Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='form-row'>
        <label>Date of Birth</label>
        <input
          type='text'
          placeholder='DD/MM/YYYY'
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className='form-row'>
        <div className='form-finance'>
          <div className='employment-status'>
            <label>Employment Status</label>
            <input
              type='text'
              placeholder='Add Employment Status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className='annual-income'>
            <label>Annual Income</label>
            <input
              type='text'
              placeholder='Add Annual Income'
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-address'>
          <div className='house-number'>
            <label>House Number</label>
            <input
              type='text'
              placeholder='Add House Number'
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>
          <div className='postcode'>
            <label>Postcode</label>
            <input
              type='text'
              placeholder='Add Postcode'
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>
        </div>
      </div>

      <input type='submit' value='Submit' className='btn btn-block' />
    </form>
  )
}

export default UserDetails
