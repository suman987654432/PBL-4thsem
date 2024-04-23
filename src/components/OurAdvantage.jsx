import React from "react";
import { Agencies_icon, Brand_icon } from "../assets";
import HighlightContainer from "../components/HighlightContainer";
import Card from "./Card";

const OurAdvantage = () => {

    const styleSync = [
        "Analytics for 200 million profiles worldwide.",
        "Specifically made to streamline and organize Influencer Marketing strategies.",
        "Valuable data you won’t find listed on social networks.",
        "Recruitment features and e-commerce integrations all in one central hub.",
        "Flexible pricing for any business and try-before-you-buy options."
    ];

    const otherIndustary = [
        "Limited pool of on-platform influencers.",
        "One-size-fits-all tools with no options for customization.",
        "Insights you can find on social networks yourself.",
        "No real value beyond search and analysis, resulting in platform hopping and lost data.",
        "Opaque pricing with no trial option."
    ];

    return (
        <div className="container my-36">
            <HighlightContainer
                heading="The StyleSync Advantages"
                paragraph="Step up your Influencer Marketing game with Influencity supporting you every step of the way"
                btn
                btn1={"Start Your Trail"}
                btn2={"Our Platform"}
            />

            <div className="text-center">
                <h1 className="h3">Crush Your Influencer Marketing Goals</h1>
                <p className="body-2 max-w-3xl mx-auto mb-10 text-n-2 lg:mb-8">We’ll give you the tools you need to stay on track and informed, empowering you to make the best moves.</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-10 my-8">
                <Card
                    image={Brand_icon}
                    title="FLEXIBILITY"
                    subtitle="Access Key Resources Without Getting Locked In"
                    description="We won’t make you sign contracts at Influencity because we believe you’ll stay for the value we offer."
                    linkText="Explore Our Pricing"
                />
                <Card
                    image={Agencies_icon}
                    title="USABILITY"
                    subtitle="Get User-Friendly Tools for Your Whole Team"
                    description="Access the most easy-to-use platform on the market — fully customizable to fit the needs of your brand."
                    linkText="Give it a Try"
                />
                <Card
                    image={Agencies_icon}
                    title="SUPPORT"
                    subtitle="Backed by a Passionate Team of Experts"
                    description="Our team is committed to helping you grow by offering the innovative Influencer Marketing tools you need."
                    linkText="Talk to Us"
                />
            </div>

            <div className="flex flex-col lg:flex-row lg:mt-16">
                <div className="w-full lg:my-auto lg:w-[46%] pr-5">
                    <div className="mb-3">
                        <h1 className="h3 text-center sm:text-start"> Influencer Platform vs. Typical Solution</h1>
                        <p className="body-2 w-3xl text-justify mx-auto text-n-2">Learn why we aren’t a marketplace or a basic database — we’re something more. Influencity provides the end-to-end tools you need to work efficiently as a professional.</p>
                    </div>
                    <button className="w-1/8 mx-auto py-2.5 px-5 mt-4 me-2 mb-2 text-sm font-medium text-red-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400">
                        Start Your Trial
                    </button>

                    <button className="w-1/8 mx-auto py-2.5 px-5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400 ml-5">
                        Learn More
                    </button>
                </div>
                <div className="flex sm:flex-row mt-8 lg:mt-0 flex-col md:w-50% md:ml-10">
                    <InfluencerCard
                        title="StyleSync"
                        listItems={styleSync}
                        bgColor="bg-n-6/70 border border-n-5"
                        titleStyle="h4"
                        sign="✅"
                    />
                    <InfluencerCard
                        title="The Industry Norm"
                        listItems={otherIndustary}
                        bgColor="bg-n-7 text-n-2"
                        titleStyle="h5"
                        sign="❌"
                    />
                </div>
            </div>
            <div>
                <HighlightContainer
                    heading=" Streamline Influencer Marketing with a Powerful Data-Driven Platform"
                    paragraph=" Are you ready to learn more about what Influencity can do for you? Start exploring with a free trial or get a demo from our team of experts!"
                    btn
                    btn1="Start a Free Trial"
                />
            </div>
        </div>
    )
}

export default OurAdvantage

export const InfluencerCard = ({ title, titleStyle, listItems, bgColor, sign }) => {
    return (
        <div className={`w-80 h-auto ${bgColor} rounded-lg`}>
            <div className="p-6">
                <h2 className={`${titleStyle} mb-8 text-center`}>{title}</h2>
                <ul className="list-none body-2">
                    {listItems.map((item, index) => (
                        <div key={index}>
                            <li className={`py-5 ${index === listItems.length - 1 ? '' : 'border-b-2 border-n-4/30'}`}>
                                {sign} {item}
                            </li>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    );
};