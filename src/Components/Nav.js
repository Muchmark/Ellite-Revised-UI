import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../images/elite_black_logo.png'
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand">
                        <img src={headerLogo} alt="Header Logo" className='img-fluid ms-5' width="160px"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item pe-4">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item pe-4">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item pe-4 dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Products</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item pe-4">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>

                            <li className="nav-item pe-4">
                                <Link className="nav-link" href="#/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav