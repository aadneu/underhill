import React from 'react'
import { NavLink as ProjectLink } from 'react-router-dom'

const Overview = () => {
  return (
    <div className="">
              {/* <ProjectLink to="snake"><button type="button" className="btn btn-sm btn-outline-warning" >Snake</button></ProjectLink>
              <ProjectLink to="tictac"><button type="button" className="btn btn-sm btn-outline-warning">Tic tac toe</button></ProjectLink> */}
              {/* <button type="button" className="btn btn-sm btn-outline-warning" disabled>Spotify App</button> */}
              <div className="row" >
                <div className="col-sm-6  my-3">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Orm</h5>
                        <p className="card-text">Min egen versjon av det klassiske snake-spillet fra mobil.</p>
                        <ProjectLink to="snake"><button type="button" className="btn btn-sm btn-warning" >Ormin Lange</button></ProjectLink>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6  my-3">
                    <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Tre på rad</h5>
                        <p className="card-text">Simpel variant av tre på rad, med en motstander uten kunstig intelligens.</p>
                        <ProjectLink to="tictac"><button type="button" className="btn btn-sm btn-warning">Tre på rad</button></ProjectLink>
                    </div>
                    </div>
                </div>
                {/* <div className="col-sm-6  my-3">
                    <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Spotify App</h5>
                        <p className="card-text">Nåværende prosjekt som er i produksjon...</p>
                        <button type="button" className="btn btn-sm btn-warning" disabled>Spotify App</button>
                    </div>
                    </div>
                </div> */}
                <div className="col-sm-6  my-3">
                    <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Decisionmaker App</h5>
                        <p className="card-text">Enkel app for deg som sliter med beslutningsvegring og FOBO. </p>
                        <ProjectLink to="decision"><button type="button" className="btn btn-sm btn-warning" >Decisionmaker</button></ProjectLink>
                    </div>
                    </div>
                </div>
                
                </div>
    </div>
  )
}

export default Overview