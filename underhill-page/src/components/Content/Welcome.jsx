import React, {useState, useEffect} from 'react'


const Welcome = () => {


  const [newQuote, setNewQuote] = useState(null)
  const URL = `https://philosophy-quotes-api.glitch.me/quotes`

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await fetch(URL);
        const data = await result.json()
        let rand = Math.floor(Math.random() * data.length)
        let randomQuote = data[rand]
        setNewQuote(randomQuote)
      } catch (error) {
        console.error('error fetching data', error)
      }
    };
    fetchData();
    
  }, []);
  



  return (
    <div  className ="welcome " >

     

      <div className="container-lg d-flex justify-content-center">
        
        <div className="col-10 d-grid min-vh-100">

          <div className="row align-items-center mt-5 zind">
              <img src="/logo.png" className="img-fluid" alt=""/> 
          </div>

          <div className="row text-center mb-3 align-items-end zind">
              {newQuote ? (
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>{newQuote.quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer text-warning">
                {newQuote.source} 
                {/* <cite title="Source Title"> - {newQuote.philosophy} </cite> */}
              </figcaption>
            </figure>
              ) : (
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>If it is not right, do not do it, if it is not true, do not say it.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer text-warning">
                  Marcus Aurelius 
                  </figcaption>
                </figure>
                  )}
          </div>
          
         

        </div>
        
      
       
      </div>

    </div>
  )
}

export default Welcome