import React from 'react'
import { NavLink as ProjectLink } from 'react-router-dom'

const Overview = () => {

    const data = [
        {
            title: 'Orm',
            text: 'Min egen versjon av det klassiske snake-spillet fra mobil.',
            btn: 'Ormin Lange',
            pjlink: 'snake'
        },
        {
            title: 'Tre på rad',
            text: 'Simpel variant av tre på rad, med en motstander uten kunstig intelligens.',
            btn: 'Tre på rad',
            pjlink: 'tictac'
        },
        {
            title: 'Decisionmaker App',
            text: 'Enkel app for deg som sliter med beslutningsvegring og FOBO.',
            btn: 'Decisionmaker',
            pjlink: 'decision'
        }
    ]


  return (
    <div className="">
        <div className="row" >
            {data.map((item, index) => (
                <div key={index} className="col-sm-6  my-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.text}</p>
                            <ProjectLink to={item.pjlink}><button type="button" className="btn btn-sm btn-warning">{item.btn}</button></ProjectLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Overview