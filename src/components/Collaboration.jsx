import React from 'react';
import Marquee from "react-fast-marquee";
import { collaborations } from '../constants';

const Collaboration = ({heading}) => {
    return (
        <section className="my-20
        ">
            <div className="container text-center mb-10">
              { heading && <h1 className="h3">Over 100+ brands use StyleSync to find influencers like you</h1>}
            </div>
            <div className="flex overflow-hidden bg-n-7/40 backdrop-blur border border-n-1/10 p-5 border-y">
                <Marquee speed={60} direction="left" loop={0} gradient={false}>
                    {collaborations.map((company) => (
                        <img key={company.id} className="h-20 w-50 object-cover mr-24" src={company.img} alt={company.name} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Collaboration;
