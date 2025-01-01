import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FaShoppingBasket } from "react-icons/fa";


const Header = () => {
  return (
   <header className='header'>
    <Image 
      src="/dp.jpeg" 
      alt="Cart Icon" 
      width={50} 
      height={45} 
    />
    <h1 className='logo'>Patels Flower Shop</h1>
  
    <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/About'}>About</Link>
        <Link href={'/Shop'}>Shop</Link>
        <Link href={'/contact'}>Contact</Link>
        <FaShoppingBasket />
       
    </nav>
   </header>
  )
}

export default Header
