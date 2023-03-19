import React, { useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from "../../hooks/useHeaderShadow"
const Header = () => {
  const [menuOpen, setMenuOpened]= useState(false);
  const headerShadow = useHeaderShadow()
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount:0.25}}
     className={css.wrapper}>
    <div className={`paddings ${css.container}`
  }
  style={{boxShadow:headerShadow}}
  >
      <div className ={` flexCenter innerWidth ${css.name}`}>
        Moayad Almarzook
      </div>
  <ul
  // style={getMenuStyles(menuOpened)}
  className = {`flexCenter ${css.menu}`}>
    <li><a href="">Services</a></li>
    <li><a href="">experince</a></li>
    <li><a href="">testimonials</a></li>
    <li className={`flexCenter ${css.phone}`}><p>+9660547757402</p>
    <BiPhoneCall size={"40px"}></BiPhoneCall>
    </li>
  </ul>
  <div className={css.menuIcon}
  onClick={()=>setMenuOpened((prev)=>!prev)}
  >

    <BiMenuAltRight size={30}/>
    </div>
    </div>
    </motion.div>
  )
}

export default Header