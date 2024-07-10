import React, { useEffect, useState } from 'react'
import instance from '../../api/baseUrl'
import './style.css'
import defImage from '../../assets/images/default.png'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/Loader'

function ProductCategories({ fetchURL }) {

    const [categories, SetCategories] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true);



    const fetchAllCategories = async () => {
        try {
            const res = await instance.get(fetchURL)
            SetCategories(res?.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const searchProducts = () => {
        const data = categories.filter(i => (i.name).toLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
        SetCategories(data)
    }

    useEffect(() => {
        fetchAllCategories()
    }, [search])
    return (
        <>
            <div className='text-center mt-5'>
                <h1>Categories</h1>
    
            </div>
            {loading ? <Loader /> :

                <div>
                    <div className='mt-3 p-3 text-end d-flex justify-content-end'>
                        <div className="search-wrapper cf">
                            <input
                                className='text-center mt-2'
                                type="text"
                                placeholder="Search Category"
                                style={{ boxShadow: "none" }}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                            <button type="submit" onClick={() => { searchProducts() }}>🔍</button>
                        </div>

                    </div>
                    <section>
                        <div className="container">
                            <div className="row">
                                {categories.length > 0 ?

                                    categories.map(i => (
                                        <div className="col-md-4 mt-4 " key={i.id} >
                                            <Link to={`category/${i.id}/all-products`} style={{ textDecoration: 'none' }}>
                                                <div className="card profile-card-5">
                                                    <div className="card-img-block">
                                                        <img
                                                            className="card-img-top"
                                                            src={i.image || defImage}
                                                            alt="pro"
                                                            onError={(e) => {
                                                                e.target.src = defImage;
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <h5 className="card-title">{i.name}</h5>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                    : 
                                    
                                    <>
                                        <div className='d-flex align-items-center justify-content-center my-5'>
                                            <span>Found Nothing</span>
                                        </div>
                                    </>
                                    }


                            </div>
                        </div>
                    </section>
                </div>
            }

        </>

    )
}

export default ProductCategories