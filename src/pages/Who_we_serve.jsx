import React from 'react';
import Services from '../components/Services';
import Profits from '../components/Profits';
import Collaboration from '../components/Collaboration';
import Resources from '../components/Resources';
import HighlightContainer from '../components/HighlightContainer';



const Who_we_serve = () => {
  return (
    <div className="container my-36">
      <HighlightContainer
        heading="Influencer Marketing Solutions for Every Industry"
        paragraph=" An AI-Powered platform that helps brands, agencies, and e-commerce companies create Influencer Marketing campaigns with confidence. Learn how Influencity can help you accomplish more with less and get better campaign results."
        btn
        btn1='Start a Free Trial'
        btn2="Our Platform"
      />

      <Services />
      <Profits />

      <div className="text-center">
        <h1 className="h3">Innovating Across All Industries</h1>
        <p className="body-2 max-w-3xl mx-auto mb-10 text-n-2 lg:mb-8">Companies of all sizes seek out influencer collaborations that can provide a lasting ROI. Check out some of the brands that use our platform to manage the full life cycle of their Influencer Marketing campaigns.</p>
      </div>
      <Collaboration />
      <Resources />
      <HighlightContainer
        heading="Streamline Influencer Marketing with a Powerful Data-Driven Platform"
        paragraph="Are you ready to learn more about what Influencity can do for you? Start exploring with a free trial or get a demo from our team of experts!"
        btn
        btn1='Start a Free Trial'
      />
    </div>
  );
};

export default Who_we_serve;
