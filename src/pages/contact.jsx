import React from 'react'
import { Link } from 'react-router-dom'
import { IconMail, IconMessage, IconMapPin, IconPhonePlus } from '@tabler/icons-react';
import SupportForm from '../components/supprtForm';

export default function Contact() {
  return (
    <div className='pt-[60px]'>
            <h1 style={{fontSize:'clamp(20px, 3vw, 36px)'}} className='font-light text-center py-10 md:py-20'>Contact Our Team</h1>
            {/* <div className='bg-[#dce264] mt-[60px] w-[300px] h-[300px] absolute blur-[160px] z-0 top-[50%]'></div>
             */}
            {/* Card Container with Grid Layout */}
            <div className='cardContainer w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4 px-5 lg:px-20 py-10 md:py-16 z-10'>
                <div className='border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5'>
                        <IconMail stroke={2} />
                    </div>
                    <h3 className='font-bold text-sm sm:text-base'>Chat To Management</h3>
                    <p className='text-sm'>Speak to our Team</p>
                    <Link className='underline text-sm'>darul@mngmnt.com</Link>
                </div>
                
                <div className='border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5'>
                        <IconMessage stroke={2} />
                    </div>
                    <h3 className='font-bold text-sm sm:text-base'>Chat To Support</h3>
                    <p className='text-sm'>Speak to our Team</p>
                    <Link className='underline text-sm'>darul@mngmnt.com</Link>
                </div>

                <div className='border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5'>
                        <IconMapPin stroke={2} />
                    </div>
                    <h3 className='font-bold text-sm sm:text-base'>Visit Us</h3>
                    <p className='text-sm'>Speak to our Team</p>
                    <Link className='underline text-sm'>darul@mngmnt.com</Link>
                </div>

                <div className='border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5'>
                        <IconPhonePlus stroke={2} />
                    </div>
                    <h3 className='font-bold text-sm sm:text-base'>Call Our Team</h3>
                    <p className='text-sm'>Speak to our Team</p>
                    <Link className='underline text-sm'>darul@mngmnt.com</Link>
                </div>
            </div>

            <SupportForm/>
        </div>
  )
}
