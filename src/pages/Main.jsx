import React from 'react'
import { Article } from '../components/Article'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'

export const Main = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Banner />
            <Article />
        </main>
    )
}
