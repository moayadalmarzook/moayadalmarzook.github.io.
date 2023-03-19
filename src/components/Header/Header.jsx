import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import { motion } from 'framer-motion'
const Header = () => {
  return (
    <div
 
     className={css.wrapper}>
    <div className={`paddings ${css.container}`}>
      <div className ={` flexCenter innerWidth ${css.name}`}>
        Moayad Almarzook
      </div>
  <ul className = {`flexCenter ${css.menu}`}>
    <li><a href="">Services</a></li>
    <li><a href="">experince</a></li>
    <li><a href="">testimonials</a></li>
    <li className={`flexCenter ${css.phone}`}><p>+9660547757402</p>
    <BiPhoneCall size={"40px"}></BiPhoneCall>
    </li>
  </ul>
    </div>
    </div>
  )
}

export default Header