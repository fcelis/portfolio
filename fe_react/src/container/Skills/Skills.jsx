import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import ReactToolTip from 'react-tooltip';

import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";

import './Skills.scss';
import work from "../Work/Work";

const Skills = () => {

    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);


    useEffect(() => {
        const query = '*[_type=="experiences"]'
        const skillsquery = '*[_type=="skills"]'
        client.fetch(query)
            .then((data) => {
                setExperience(data);
            })
        client.fetch(skillsquery)
            .then((data) => {
                setSkills(data);
            })
        return () => {

        }
    }, [])
    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app_flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}

                </motion.div>

                <motion.div className="app__skills-exp">
                    {experience?.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <motion.div
                                        whileInView={{opacity: [0, 1]}}
                                        transition={{duration: 0.5}}
                                        className="app__skills-exp-work app_flex"
                                        data-tip
                                        data-fo={work.name}
                                        key={work.name}
                                    >
                                        <h4 className="bold-text">{work.name}</h4>
                                        <p className="p-text">
                                            {work.company}
                                        </p>
                                        <ReactToolTip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactToolTip>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Skills,'app_skills'),'skills',"app__whitebg");