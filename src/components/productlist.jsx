import React from 'react'

export default function ProductList() {
    return (
        <div className='h-screen relative bg-gray-100 font-parkinsans flex justify-between gap-10 items-center'>

            <h1 className='text-9xl z-20 font-extrabold text-[#0000001d] absolute top-[40%] left-[20%]'>Klic PH T112</h1>
            <img
                src="https://www.poshhiveinnovates.com/assets/img/portfolio/2.jpg"
                alt=""
                style={{ borderRadius: "57% 43% 76% 24% / 30% 43% 57% 70%" }}
                className='absolute z-10 h-[450px] top-[10%] left-[33%]'
            />

            <div>
                <h1>Klic PH T112</h1>
                <p>Under a motive of " do your best to become the best", PoshHive Innovates Pvt Ltd has been developing and offering a complete line of Advance Queue Calling System for Restaurants, food courts, cafes, hospitals, banks and most retail businesses where wireless communication technology for enhanced productivity is in need.</p>
            </div>

            <div>
                <h1>Advantages</h1>
                <p>Paging system range up to 400m, The coaster pagers built-in 300mAh lithium battery, easy to recharge and standby time last 20 hours with fully charged.The guest pager prompt time could be set from 1s to 250s, no worry about the customer will miss the call.</p>
            </div>

            <div>
                <h1>Usage</h1>
                <p>The guest pagers could be set with beep, vibration, flash, and the 3 prompt modes could be combined at will which makes it suits for a variety of businesses. Also the (beep, vibration, flash) speed is adjustable in 3 levels.</p>
            </div>

        </div>
    )
}
