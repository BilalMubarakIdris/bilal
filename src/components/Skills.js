import React from 'react';
import { SiTailwindcss, SiFlask, SiSpring, SiPostgresql, SiDocker, SiAmazonaws, SiKubernetes, SiMongodb, SiExpress, SiMysql, SiRedux, SiCplusplus, SiHtml5, SiTableau, SiMaterialui } from 'react-icons/si'
import { IoLogoJavascript  } from 'react-icons/io'
import { FaJava, FaNode,FaGithub, FaPython, FaBootstrap, FaReact, FaCss3Alt, FaRProject, FaPhp } from 'react-icons/fa'
import { DiGit, DiDjango } from 'react-icons/di'
import './Skills.css'

const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <div className="heading-section">
                <h1 className="skills-text">Skills</h1>
            </div>
            <div>
                <div className="skills">
                    <span className="skill">
                        <SiHtml5 />
                    </span>
                    <span className="skill">
                        <FaCss3Alt />
                    </span>
                    <span className="skill">
                        <IoLogoJavascript />
                    </span>
                    <span className="skill">
                        <SiTailwindcss />
                    </span>
                    <span className="skill">
                        <FaReact />
                    </span>
                    <span className="skill">
                        <FaNode />
                    </span>
                    <span className="skill">
                        <FaJava />
                    </span>
                    <span className="skill">
                        <FaGithub  />
                    </span>
                    <span className="skill">
                        <DiGit />
                    </span>
                    <span className="skill">
                        <SiRedux />
                    </span>
                    <span className="skill">
                        <FaBootstrap />
                    </span>
                    <span className="skill">
                        <SiCplusplus />
                    </span>
                    <span className="skill">
                        <FaPython />
                    </span>
                    <span className="skill">
                        <SiFlask />
                    </span>
                    <span className="skill">
                        <SiSpring />
                    </span>
                    <span className="skill">
                        <DiDjango />
                    </span>
                    <span className="skill">
                        <SiPostgresql />
                    </span>
                    <span className="skill">
                        <SiDocker />
                    </span>
                    <span className="skill">
                        <SiAmazonaws />
                    </span>
                    <span className="skill">
                        <SiKubernetes />
                    </span>
                    <span className="skill">
                        <SiMongodb />
                    </span>
                    <span className="skill">
                        <SiExpress />
                    </span>
                    <span className="skill">
                        <SiMysql />
                    </span>
                    <span className="skill">
                        <FaPhp />
                    </span>
                    <span className="skill">
                        <FaRProject />
                    </span>
                    <span className="skill">
                        <SiTableau />
                    </span>
                    <span className="skill">
                        <SiMaterialui />
                    </span>
                </div>
            </div>
        </div>
    )
}



export default Skills