import React from 'react'
import '../Css/Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className=''>
            <img className='w-[200px]' id='logo' src="../../public/Admin_Assets/nav-logo.svg" alt="" />
            <ul className='flex gap-[50px] '>

            <NavLink className='navlink' to='/'>
                <img src="../../public/Admin_Assets/Product_Cart.svg" alt="" />
                <span>
                    Add product
                </span>
            </NavLink>
           
            <NavLink className='navlink' to='/update'>
                <img src="../../public/Admin_Assets/Product_list_icon.svg" alt="" />
                <span>
                    Update product
                </span>
            </NavLink>
                        
            </ul>
        </nav>
    )
}

export default Nav