import React, { useEffect, useState } from 'react'
import './allProducts.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import defImage from '../assets/images/default.png'
import Loader from '../components/loader/Loader'


function AllProducts() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const params = useParams();
  const [loading, setLoading] = useState(true);


  const fetchAllProducts = async () => {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${params.id}/products`)
    try {
      setProducts(res.data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }
  const searchProducts = () => {
    const data = products.filter(i => (i.title + i.name).toLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
    setProducts(data)
  }

  useEffect(() => {
    fetchAllProducts()
  }, [search])
  return (
    <>
      <h1>Products</h1>
      <>
        {loading ?
          <Loader />

          :
          <>
            <div className='mt-3 p-3 text-end d-flex justify-content-end'>
              <div className="search-wrapper cf">
                <input
                  className='text-center mt-2'
                  type="text"
                  placeholder="Search Products"
                  style={{ boxShadow: "none" }}
                  onChange={(e) => { setSearch(e.target.value) }}
                />
                <button type="submit" onClick={() => { searchProducts() }}>🔍</button>
              </div>
            </div>
            <section>
              <div className="container">
                <div className="row">
                  {products.length > 0 ?
                    products.map(i => (
                      <div className="col-md-4 mt-4 " key={i.id}>
                        <Link to={`/product/${i.id}`} style={{ textDecoration: 'none' }}>
                          <div className="card profile-card-5">
                            <div className="card-img-block">
                              <img
                                className="card-img-top"
                                src={i.images && i.images[0]}
                                alt="pro"
                                onError={(e) => {
                                  e.target.src = defImage;
                                }}
                              />
                            </div>
                            <div className="card-body pt-0">
                              <h5 className="card-title">{i.title}</h5>
                              <p className="card-text">
                                $ {i.price}
                              </p>
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
          </>
        }
      </>
    </>

  )
}

export default AllProducts