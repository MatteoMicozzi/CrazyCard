const UserDetails = () => {
  return (
    <form className='submit-form'>
      <div className='form-row'>
        <div className='form-name'>
          <div className='title-name'>
            <label>Title Name</label>
            <input type='text' placeholder='Add Title Name' />
          </div>
          <div className='first-name'>
            <label>First Name</label>
            <input type='text' placeholder='Add First Name' />
          </div>
          <div className='last-name'>
            <label>Last Name</label>
            <input type='text' placeholder='Add Last Name' />
          </div>
        </div>
      </div>
      <div className='form-row'>
        <label>Date of Birth</label>
        <input type='text' placeholder='DD/MM/YYYY' />
      </div>
      <div className='form-row'>
        <div className='form-finance'>
          <div className='employment-status'>
            <label>Employment Status</label>
            <input type='text' placeholder='Add Employment Status' />
          </div>
          <div className='annual-income'>
            <label>Annual Income</label>
            <input type='text' placeholder='Add Annual Income' />
          </div>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-address'>
          <div className='house-number'>
            <label>House Number</label>
            <input type='text' placeholder='Add House Number' />
          </div>
          <div className='postcode'>
            <label>Postcode</label>
            <input type='text' placeholder='Add Postcode' />
          </div>
        </div>
      </div>

      <input type='submit' value='Submit' className='btn btn-block' />
    </form>
  )
}

export default UserDetails
