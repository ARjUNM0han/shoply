import React from 'react'

function Footer() {
    return (
        <footer className="bg-body-primary text-center">

            <div className="container p-4 pb-0">
                <section className="mb-4">
                   
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f" />
                    </a>
             
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google" />
                    </a>
              
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#0082ca" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
               
                    <a
                        data-mdb-ripple-init=""
                        className="btn text-white btn-floating m-1 rounded-4"
                        style={{ backgroundColor: "#333333" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github" />
                    </a>
                </section>
                
            </div>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2024 Copyright:
                <span className="text-body">
                   dot.com
                </span>
            </div>

        </footer>

    )
}

export default Footer