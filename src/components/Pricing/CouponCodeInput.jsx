import React, { useState } from 'react';

const CouponCodeInput = ({ applyCoupon }) => {
    const [couponCode, setCouponCode] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [isCouponExpired, setIsCouponExpired] = useState(false);

    const handleApplyCoupon = () => {
        // Pass the entered coupon code to the parent component for validation
        applyCoupon(couponCode);
        if (couponCode === 'HALFOFF') {
            setIsCouponApplied(true);
        } else {
            setIsCouponExpired(true);
            setTimeout(() => {
                setIsCouponExpired(false);
            }, 1000);
        }

    };

    return (
        <div className="mt-5">
            <input
                className="block w-80 border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-10/30 border-n-5/80 mb-2"
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
            />
            {isCouponApplied && <p className='text-green-600' >{`'${couponCode}' applied successfully`}</p>}
            {isCouponExpired && <p className='text-red-500'>{`'${couponCode}' Invalid coupon code`}</p>}
            <button onClick={handleApplyCoupon} className="w-80 mx-auto py-2.5 px-5 mt-12 me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400">
                Apply Coupon
            </button>

        </div>
    );
};

export default CouponCodeInput;
