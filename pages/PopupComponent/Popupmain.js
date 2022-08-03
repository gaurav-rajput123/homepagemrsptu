import React, { useState } from 'react'
import { Typography } from '@mui/material';
// import './Popupmain.css';
import axios from 'axios';

export default function Popupmain(props) {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: ""
  })

  const submit = async () => {
    axios({
      method: "post",
      url: "https://api.keewesolutions.com/mailer/enquiry",
      data: data
    })
    // console.log(data)
  }

  return (<>
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>&times;</button>
        <div>
          <Typography variant='h4' sx={{ marginBottom: '10px', textAlign: 'center' }} >Quick Enquiry</Typography>
          <form
            name="registerForm"
            className="row register-form"
            onSubmit={submit}
          >
            {/* Form Input */}
            <div id="input-name" className="col-md-12">
              <p>Your Name*</p>
              <input
                type="text"
                name="name"
                className="form-control name"
                placeholder="Enter Your Name"
                required
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </div>
            {/* Form Input */}
            <div id="input-email" className="col-md-12">
              <p>Your Email*</p>
              <input
                type="email"
                name="email"
                className="form-control email"
                placeholder="Enter Your Email"
                required
                value={data.email}
                onChange={e => setData({ ...data, email: e.target.value })}
              />
            </div>
            {/* Form Input */}
            <div id="input-phone" className="col-md-12">
              <p>Your Phone Number*</p>
              <input
                type="tel"
                name="phone"
                className="form-control phone"
                placeholder="Enter Your Phone Number"
                required
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
              />
            </div>
            {/* Form Input */}
            <div id="input-phone" className="col-md-12">
              {/* <p>Category*</p>
                  <input
                    type=""
                    name="Categories"
                    className="form-control phone"
                    placeholder="Category*"
                    required
                  /> */}
              <p htmlFor="dog-names">Category*</p>
              <select name="dog-names" id="dog-names"
                value={data.enquiry}
                onChange={e => setData({ ...data, enquiry: e.target.value })} placeholder="Enquiry Type" style={{ margin: '0 0 22px', border: '1px solid #ccc', height: '52px', fontSize: '16px', fontWeight: '300', color: '#333', transition: 'all 400ms ease-in-out', borderRadius: '0.25rem', width: '100%', padding: '0.375rem 0.75rem' }}>
                <option value="">Select</option>
                <option value="Academic">Academic</option>
                <option value="Technical">Technical</option>
              </select>
            </div>
            {/* Form Input
                <div id="input-phone" className="col-md-12">
                  <p>Message*</p>
                  <input
                    type="text"
                    name="Message"
                    className="form-control phone"
                    placeholder="Write Your Message"
                    required
                  />
                </div> */}

            {/* Form Button */}
            <div className="col-md-12 form-btn text-center">
              <button
                type="submit"
                className="btn btn-md btn-rose tra-black-hover submit"
                onClick={submit.required}
              >
                Enquire Now
              </button>
            </div>
            {/* Form Message */}
            <div className="col-md-12 register-form-msg text-center">
              <span className="loading" />
            </div>
          </form>
        </div>


      </div>
    </div>



  </>
  )

}
