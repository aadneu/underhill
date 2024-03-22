import React, {useState, useEffect} from 'react'


const Welcome = () => {

  // const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState(null)
  const URL = `https://philosophy-quotes-api.glitch.me/quotes`

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await fetch(URL);
        const data = await result.json()
        // setQuotes(data)
        let rand = Math.floor(Math.random() * data.length)
        let randomQuote = data[rand]
        setNewQuote(randomQuote)
      } catch (error) {
        console.error('error fetching data', error)
      }
    };
    fetchData();
    
  }, []);
  
  // const getRandomQuote = (quotes) => {
  //   let rand = Math.floor(Math.random() * quotes.length)
  //   let randomQuote = quotes[rand]
  //   setNewQuote(randomQuote)
  // }


  return (
    <div  className ="welcome " >

     

      <div className="container-lg d-flex justify-content-center">
        
        <div className="col-10 d-grid min-vh-100">

          <div className="row align-items-center zind">
              <img src="/logo.png" className="img-fluid" alt=""/> 
          </div>

          <div className="row text-center zind">
              {newQuote && (
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>{newQuote.quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer text-warning">
                {newQuote.source} <cite title="Source Title"> - {newQuote.philosophy} </cite>
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