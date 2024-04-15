import React from 'react'
import HighlightContainer from '../components/HighlightContainer'
import PriceCard from '../components/Pricing/PriceCard'

const PricingPage = () => {
  return (
    <div className="container my-36">
      <HighlightContainer
        heading="Save Time and Improve"
        subHeading="Campaigns with the"
        baseHeading="Best Data"
        paragraph="Finally, a solution that lets you pay for what you need, when you need it."
      />
      <div className="text-center">
        <h3 className="h3">Simple, transparent price</h3>
        <p className='body-1'>No contracts. No surprice fees</p>
      </div>
      <PriceCard />
    </div>
  )
}

export default PricingPage