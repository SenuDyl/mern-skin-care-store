import React from 'react'
import Layout from '../components/HomePage/Layout'
import ProductList from '../components/HomePage/ProductList'
import PromoSection from '../components/HomePage/PromoSection'
import FeaturesSection from '../components/HomePage/FeaturesSection'
import TestimonialsSection from '../components/HomePage/TestimonialsSection'
import TrendingProductList from '../components/HomePage/TrendingProductList'
import Footer from '../components/HomePage/Footer'


const HomePage = () => {
    return (
        <div>
            <Layout />
            <ProductList/>
            <PromoSection/>
            <FeaturesSection/>
            <TrendingProductList/>
            <TestimonialsSection/>
            <Footer/>
        </div>
    )
}

export default HomePage
