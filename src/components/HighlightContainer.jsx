import React from 'react'

const HighlightContainer = ({ heading, subHeading, baseHeading, paragraph, btn, btn1, btn2 }) => {
    return (
        // bg-n-6/50
        <div className="flex flex-col items-center justify-center text-center  p-1 md:p-5 py-10 pb-15 rounded-2xl mb-10 mt-10 bg-gradient-to-b from-[#FF407D]/40 via-[#FFE6E6]/30 to-[#DA0C81]/20">
            <div className="mb-8 w-full md:w-[60%] mt-5">
                <h1 className="h4 md:h2 text-center">{heading}</h1>
                {subHeading && <h1 className="h4 md:h2 text-center">{subHeading}</h1>}
                {baseHeading && <h1 className="h4 md:h2 text-center">{baseHeading}</h1>}
                <p className="font-light p-2 mt-5 text-base tracking-widest">{paragraph}</p>
            </div>

            {btn && <div className="flex gap-8 mt-2 mb-5">
                {btn1 && <button className="bg-pink-500 text-white px-4 py-2 rounded-md">{btn1}</button>}
                {btn2 && < button className="bg-pink-500 text-white px-4 py-2 rounded-md">{btn2}</button>}
            </div>}
        </div >
    )
}

export default HighlightContainer