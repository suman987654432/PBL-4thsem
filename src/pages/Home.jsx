import React from 'react'
import Hero from '../components/Hero'
import Support from '../components/Support'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Collaboration from '../components/Collaboration'

const Home = () => {
    return (
        <>
            <Hero />
            <Support />
            <Services />
            <Testimonial />
            <Collaboration heading/>
        </>
    )
}

export default Home