import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import defImage from '../../assets/images/default.png'

function SingleProduct() {

    const params = useParams()
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})

    const fetchSingleProduct = async () => {
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`);
            setProduct(res?.data)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchSingleProduct()
    }, [])

    console.log(product)
    return (
        <>
            {loading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <div className="shell">
                        <div className="container w-50">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="wsk-cp-product">
                                        <div className="wsk-cp-img">
                                            <img
                                                src={product.images[0]}
                                                alt="Product"
                                                className="img-responsive"
                                                onError={(e) => {
                                                    e.target.src = defImage;
                                                }}
                                            />
                                        </div>
                                        <div className="wsk-cp-text">
                                            <div className="category">
                                                <span>{product.category.name}</span>
                                            </div>
                                            <div className="title-product">
                                                <h3>{product.title}</h3>
                                            </div>
                                            <div className="description-prod">
                                                <p>
                                                    {product.description}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="wcf-left">
                                                    <span className="price"> $ {product.price}</span>
                                                </div>
                                                <div className="wcf-right">
                                                    <div className="buy-btn">
                                                        <i className="zmdi zmdi-shopping-basket" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default SingleProduct