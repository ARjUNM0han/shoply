import React from 'react'
import MyLogo from '../assets/images/logo.png'

function Header() {
    return (
        <>
            <nav className="navbar navbar-light  bg-dark">
                <div className="container">
                    <span className="navbar-brand" >
                        <img
                            src={MyLogo}
                            height={50}
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header