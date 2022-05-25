import React, {useState} from 'react'

import { images } from '../../constants'
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import './Navbar.scss'
const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <nav className="app__navbar">
            <div className="app_navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['home','about','contact', 'work','skill'].map((item) =>(
                    <li className="app_flex p-text" key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={()=>setToggle(true)}/>
                {
                    toggle && (
                        <motion.div
                            whileInView={{x: [300,0]}}
                            transition={{duration: 0.85, ease: 'easeOut' }}
                        >
                        <HiX onClick={()=>setToggle(false)} />
                            <ul className="app__navbar-links">
                            {['home','about','contact', 'work','skill'].map((item) =>(
                                <li  key={item} >
                                    <a href={`#${item}`}  onClick={()=>setToggle(false)}>{item}</a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar