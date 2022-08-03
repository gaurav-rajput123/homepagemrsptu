
import React, {useState} from "react";
import Time from "../../utils/time";
import axios from 'axios';
import Alert from '../../../pages/PopupComponent/Alert';

const Registerform = () => {

  const [data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    enquiry:"",
    message:""
  })

  const [show,setShow]=useState(false);

  const submit=async(e)=>{
    e.preventDefault();
    axios({
      method:"post",
      url:"https://api.keewesolutions.com/mailer/enquiry",
      data:data
    })
    // console.log(data)
    setData({
      name:"",
      email:"",
      phone:"",
      enquiry:"",
      message:""
    })
    // alert('Submited Successfully')
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }

  return (<>
  {show && <Alert setShow={setShow}/>}
    <section id="banner-2" className="bg-01 wide-60 banner-section">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* BANNER TEXT */}
          <div className="col-md-3">

          </div>
          {/* REGISTER FORM */}
          <div className="col-md-6">
            <div id="register-form">
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
                    onChange={e=>setData({...data,name:e.target.value})}
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
                    onChange={e=>setData({...data,email:e.target.value})}
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
                    onChange={e=>setData({...data,phone:e.target.value})}
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
                  <p for="dog-names">Type of Enquiry*</p>
                  {/* <input
                    type="text"
                    name="enquiry"
                    className="form-control phone"
                    placeholder="Write Your Message"
                    required
                    value={data.enquiry}
                    onChange={e=>setData({...data,enquiry:e.target.value})}
                  /> */}
                  <select name="dog-names" id="dog-names"
                    value={data.enquiry}
                    onChange={e=>setData({...data,enquiry:e.target.value})} placeholder="Enquiry Type" style={{margin: '0 0 22px', border: '1px solid #ccc', height: '52px', fontSize: '16px', fontWeight: '300', color: '#333', transition: 'all 400ms ease-in-out', borderRadius: '0.25rem', width: '100%', padding: '0.375rem 0.75rem'}}>
                    <option value="">Select</option>
                    <option value="Academic">Academic</option>
                    <option value="Technical">Technical</option>
                  </select>
                </div>
                {/* Form Input */}
                <div id="input-phone" className="col-md-12">
                  <p>Message*</p>
                  <input
                    type="text"
                    name="message"
                    className="form-control phone"
                    placeholder="Write Your Message"
                    required
                    value={data.message}
                    onChange={e=>setData({...data,message:e.target.value})}
                  />
                </div>

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
          <div className="col-md-3">

          </div>
          {/* END REGISTER FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
    </>
  );
};

export default Registerform;
