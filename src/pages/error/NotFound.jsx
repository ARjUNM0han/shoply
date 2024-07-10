import React from 'react'
import './404.css'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <div className="col-lg-12 text-404">
                        <b>404</b>
                    </div>
                    <div className="col-lg-12 text">
                        <b> PAGE NOT FOUND </b>
                    </div>
                    <div className="col-lg-12 text-btn">
                        <Link to={'/'}>
                            <button name="login" className="btn btn-outline-primary">
                                BACK TO HOME
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-2" />
            </div>
        </div>



    )
}

export default NotFound