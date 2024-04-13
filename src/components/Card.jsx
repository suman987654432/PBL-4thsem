import React from 'react'
import { arrow_right } from '../assets'
import { Link } from 'react-router-dom'

const Card = ({ image, title, subtitle, description, linkText }) => {
    return (
        <div className="max-w-md mx-auto bg-n-6/50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex flex-col">
                <div className="md:flex-shrink-0">
                    <img className="m-4 ml-8 h-20 w-20 object-cover md:ml-10" src={image} alt={title} />
                </div>
                <div className="px-8 pb-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <h5 className=" h5 mt-2">{subtitle}</h5>
                    <p className="mt-6 text-gray-500">{description}</p>
                    <div className="mt-10">
                        <Link className="ml-auto font-code text-sm font-bold text-[#E41F7B] uppercase tracking-wider cursor-pointer hover:underline underline-offset-4" to="#">
                            <div className="flex items-center">
                                <span>{linkText}</span>
                                <img className='order-1 w-4 ml-2' src={arrow_right} alt="icon" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card