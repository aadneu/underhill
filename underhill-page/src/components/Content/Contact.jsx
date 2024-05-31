import React from 'react'

import { useState } from 'react'

const Contact = ({toggleContactform}) => {

  const [message,setMessage] = useState('')
  const [email,setEmail] = useState('')
  const [fake, setFake]= useState('')

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    if(fake != '') return
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/9pmlsIOe_57", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email: email, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p className='text-center'>{error}</p>;
  }

  if (submitted) {
    return <p className='text-center px-4'>Meldingen er sendt, jeg svarer så snart jeg kan!</p>;
  }


  return (
    // <div className="contact min-vh-100 d-flex flex-column justify-content-center">
      <div className="container ">
       
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 px-4">

            <form className='' onSubmit={submit}>
                <input style={{
                  position: 'absolute',
                  // top: '0',
                  // tabIndex: "-1",
                  left: '-999px'
                  
                  // display: 'none'
                }} 
                value={fake}
                onChange={(e) => setFake(e.target.value)}
                />
                {/* <label htmlFor="email">Email</label> */}
                <input className='form-control'
                  placeholder='Din mailadresse'
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
                {/* <label htmlFor="message">Melding</label> */}
                <textarea className='form-control'
                  rows="3"
                  placeholder='Melding...'
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
              <button className=' form-control btn btn-light' type="submit">Send</button>
            </form>
            <p onClick={toggleContactform} className='text-center cursor mt-3'>Lukk kontaktskjema.</p>
          </div>
        </div>

      </div>
    // </div>
  )
}

export default Contact