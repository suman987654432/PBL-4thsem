import React from 'react';
import Card from './Card';
import { Agencies_icon, Brand_icon } from '../assets';

const Services = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="text-center mb-10">
                <h1 className="h3">Look at What StyleSync Users Are Saying</h1>
                <p className="body-1 mt-2 max-w-3xl mx-auto text-n-2 lg:mb-8">Don’t take our word for it listen to the current buzz around Influencity tools! Our clients are huge fans.</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-10">
                <Card
                    image={Brand_icon}
                    title="For Brands"
                    subtitle="Save Time. Get Results."
                    description="We offer tools designed to grow with your brand and support your influencer marketing strategy every step of the way."
                    linkText="Learn More"
                />
                <Card
                    image={Agencies_icon}
                    title="For Agencies"
                    subtitle="Robust Tools to Boost Client Reach."
                    description="Your clients want results, and we can help you deliver. Access helpful tools to explore new influencer profiles and improve ROI."
                    linkText="Learn More"
                />
            </div>
        </section>
    );
};

export default Services;
