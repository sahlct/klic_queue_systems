import React from 'react'

export default function NewTechnology() {
    return (
        <div className='flex w-full px-16 pt-20 pb-10'>
            <div className='w-[30%]'>

            </div>
            <div className='w-[70%] flex flex-col gap-12'>
                <div className='MainText font-lighter text-2xl text-start'>
                    Poshhive Innovates Pvt Ltd established in 2014 at Bangalore, with a brand name KLIC. KLIC is committed to the application of short-range wireless transmission technology.Our research and development teams have extensive experience in developing wireless electronics and wireless communications, have provided professional wireless products and solutions to our customers succeed by using Guest pager systems window intercom System and other technologies.
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
                    <div className=''>

                        <div className='w-full py-5 flex items-start flex-col gap-5'>
                            <p className='w-full h-[1px] bg-gray-500'></p>
                            <p className='text-lg font-semibold'>Our Mission</p>
                            <p className='text-start'>Our mission is to enhance customer experience by delivering efficient and reliable queue calling systems, ensuring seamless service flow and reduced waiting times.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full py-5 flex items-start flex-col gap-5'>
                            <p className='w-full h-[1px] bg-gray-500'></p>
                            <p className='text-lg font-semibold'>Our Vision</p>
                            <p className='text-start'>Our vision is to revolutionize queue management systems by leveraging innovation and technology, creating a world where waiting is a thing of the past.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
