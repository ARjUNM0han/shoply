import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllProducts from "../pages/AllProducts";
import requests from '../api/request'
import { Route, Routes } from 'react-router-dom';
import ProductCategories from './productCategory/ProductCategories';
import SingleProduct from './singleProduct/SingleProduct';
import NotFound from '../pages/error/NotFound'


function Home() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<ProductCategories fetchURL={requests.getAllCategories} />} />
                <Route path='category/:id/all-products' element={<AllProducts />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Home