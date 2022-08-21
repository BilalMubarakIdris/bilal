import React from 'react'
import Datas from './projectsData'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <div className='content' >
                {Datas.map((data, index) => {
                    return(
                        <div className='project-card' key={index}>
                            <div className='img-section'>
                                <img src={data.image} alt='porject'/>
                            </div>
                            <div className='project-info'>
                                <h5 className="project-title">{data.title}</h5>
                                <p className='desc-section'>{data.description}</p>
                                <h3>Technology :</h3> <span>{data.technology}</span>
                            </div>
                            <div className='links'>
                                <a href={data.source}>GitHub</a>
                                <a href={data.demoLink}>Live</a>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Projects
