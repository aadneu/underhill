import React from 'react'

import { useState } from 'react'

const Contact = ({handleClick}) => {

  const [message,setMessage] = useState('')
  const [email,setEmail] = useState('')

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
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
    return <p className='text-center'>Jeg har mottatt meldingen din, takk for at du tok kontakt!</p>;
  }


  return (
    // <div className="contact min-vh-100 d-flex flex-column justify-content-center">
      <div className="container ">
       
        <div className="row justify-content-center">
          <div className="col-md-5 ">

            <form className='' onSubmit={submit}>
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
                  placeholder='Melding...'
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
              <button className=' form-control btn btn-light' type="submit">Send</button>
            </form>
            <p onClick={handleClick} className='text-center cursor'>Lukk kontaktskjema.</p>
          </div>
        </div>

      </div>
    // </div>
  )
}

export default Contact