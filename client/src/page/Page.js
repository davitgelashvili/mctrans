import React from 'react'
import { Route, Routes } from 'react-router'
import MainPage from './main/page'
import CarsPage from './cars/Cars'
import { Header } from '../component/Common/Header'
import { Footer } from '../component/Common/Footer'
import CalculatorPage from './calculator/page'

export default function Page() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cars' element={<CarsPage />} />
                <Route path='/calculator' element={<CalculatorPage />} />
            </Routes>
            <Footer />
        </>
    )
}
