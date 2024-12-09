import React from 'react'

export default function AboutUs() {
    return (
        <div className='pb-10 px-16 flex flex-col gap-10'>
            <div className='w-full grid grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-extralight my-3'>About</h1>
                    <p> Under a motive of "do your best to become the best",Poshhive Innovates Pvt Ltd has been developing and offering a complete line of Advance Queue calling system for Restaurants,food courts,cafes,hospitals,banks and most retail businesses were wireless communication technology for enhanced productivity is in need.Poshhive Innovates Pvt Ltd established in 2014 at Bangalore, with a brand name KLIC. KLIC is committed to the application of short-range wireless transmission technology.</p>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='flex flex-col justify-between h-full'>
                    <div className='border border-gray-500 px-4 py-2 rounded-xl'>
                        <h3 className="font-semibold mb-2">
                            Lemanosh Electric Drill A Green Choice for Sustainable Living
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">4 min read • January 10, 2025</p>
                    </div>
                    <div className='border border-gray-500 px-4 py-2 rounded-xl'>
                        <h3 className="font-semibold mb-2">
                            Lemanosh Electric Drill Wins Design Excellence Award
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">2 min read • February 15, 2024</p>
                    </div>
                    <div className='border border-gray-500 px-4 py-2 rounded-xl'>
                        <h3 className="font-semibold mb-2">
                            Empowering Users with Smart Technology
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">10 min read • December 29, 2023</p>
                    </div>
                </div>
                <div className='h-full border rounded-2xl border-gray-500'>
                    <img src="https://i5.walmartimages.com/asr/38acc226-316c-423a-8ad2-3acd79f5f5ef_1.1bc0c041467f8005e4fabb0318abf6bb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" className='w-full h-[300px] rounded-2xl' />
                </div>
                <div className='h-full border border-gray-500 rounded-2xl '>
                    <img src="https://www.remotesource.net/wp-content/uploads/2023/05/Long-Range-Wireless-Restaurant-Call-Paging-Coaster-Guest-Pager-System-RS-QC08-400x400.webp" alt="" className='w-full h-[300px] rounded-2xl' />
                </div>
            </div>
        </div>
    )
}
