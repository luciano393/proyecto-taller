import React from 'react'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'

export const Main = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Banner />
        </main>
    )
}
