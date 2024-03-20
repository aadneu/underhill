import React from 'react'
import { NavLink as ProjectLink } from 'react-router-dom'

const Overview = () => {
  return (
    <div className="">
              {/* <ProjectLink to="snake"><button type="button" class="btn btn-sm btn-outline-warning" >Snake</button></ProjectLink>
              <ProjectLink to="tictac"><button type="button" class="btn btn-sm btn-outline-warning">Tic tac toe</button></ProjectLink> */}
              {/* <button type="button" class="btn btn-sm btn-outline-warning" disabled>Spotify App</button> */}
              <div class="row" >
                <div class="col-sm-6  my-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Orm</h5>
                        <p class="card-text">Min egen versjon av det klassiske snake-spillet fra mobil.</p>
                        <ProjectLink to="snake"><button type="button" class="btn btn-sm btn-outline-warning" >Ormin Lange</button></ProjectLink>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6  my-3">
                    <div class="card ">
                    <div class="card-body">
                        <h5 class="card-title">Tre på rad</h5>
                        <p class="card-text">Simpel variant av tre på rad, med en motstander uten kunstig intelligens.</p>
                        <ProjectLink to="tictac"><button type="button" class="btn btn-sm btn-outline-warning">Tre på rekke</button></ProjectLink>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6  my-3">
                    <div class="card ">
                    <div class="card-body">
                        <h5 class="card-title">Spotify App</h5>
                        <p class="card-text">Nåværende prosjekt som er i produksjon...</p>
                        <button type="button" class="btn btn-sm btn-outline-warning" disabled>Spotify App</button>
                    </div>
                    </div>
                </div>
                
                </div>
    </div>
  )
}

export default Overview