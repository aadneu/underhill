import React, { useEffect } from "react";
import { useState } from "react";

const About = () => {
  const [showWho, setShowWho] = useState(true);
  const [showWhat, setShowWhat] = useState(false);

  const [content, setContent] = useState();

  const url = "https://aadneu.github.io/underhill_api/data.json";

  const fetchApi = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setContent(data);
    } catch (error) {
      console.error("errrrrr fetching data", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const viewWho = () => {
    setShowWhat(false);
    setShowWho(true);
  };

  const viewWhat = () => {
    setShowWho(false);
    setShowWhat(true);
  };

  return (
    <div className="about min-vh-100">
      <div id="aboutbgpic">
        <div className="container d-flex flex-column justify-content-center vh-100 ">
          <div className="row">
            <div className=" col-lg-8 mx-auto zind d-flex px-5">
              <h2
                onClick={viewWho}
                className={`balle cursor ${showWho ? "fw-bold" : ""}`}
              >
               {content ? content.hvem.title : 'Loading'}
              </h2>
              <h2 className="balle mx-3">|</h2>
              <h2
                onClick={viewWhat}
                className={`balle cursor ${showWhat ? "fw-bold" : ""}`}
              >
                {content ? content.hva.title : 'Loading'}
              </h2>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-8 fs-5 zind mx-auto px-5">
              {showWho &&
                (content ? (
                  content.hvem.text.map((item, index) => (
                    <p key={index} className="my-3 balle">
                      {item}
                    </p>
                  ))
                ) : (
                  <h2>Loading...</h2>
                ))}

              {showWhat &&
                (content ? (
                  <>
                    {content.hva.text.map((item, index) => (
                      <p key={index} className="my-3 balle">
                        {item}
                      </p>
                    ))}
                    <h4 className="balle">{content.hvordan.title}</h4>
                    <p className="balle my-3">{content.hvordan.paragraph}</p>
                    <p className="balle">
                      <a href={content.hvordan.link} target="_blank">{content.hvordan.btn} </a>
                    </p>
                  </>
                ) : (
                  <h2>Loading...</h2>
                ))}  

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
