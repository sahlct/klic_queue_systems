import React from 'react'

export default function HomeContent() {
    return (
        <div className='mt-20 px-16 grid md:grid-cols-2 grid-cols-1'>
            <div className='leftSide flex flex-col gap-5 justify-center pt-24'>
                <div className='flex gap-2 items-center'>
                    <h1 className='flex items-center px-3 py-1 bg-[#f1f8c6] rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" /></svg><span> Ver 2.0</span>
                    </h1>
                    <p className=''>New Standerd In Queue Calling</p>
                </div>
                <h1 className='text-7xl font-bold text-start pe-5'>Advanced Queue Calling System</h1>

                <div className='self-end py-5 flex flex-col gap-2'>
                    <p>Efficiancy Technology for Supirior Perfomance</p>
                    <div className='flex gap-3'>
                        <button className='bg-black rounded-md font-semibold text-start ps-5 text-3xl text-white pt-10 pb-2 w-[70%]'>Order Now</button>
                        <div className='w-[30%] bg-black rounded-md flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-from-arc"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 12h12" /><path d="M17 16l4 -4l-4 -4" /><path d="M12 3a9 9 0 1 0 0 18" /></svg>
                        </div>
                    </div>

                </div>

            </div>
            <div className='rightSide h-[500px] flex items-center justify-end ps-20'>
                <img src="https://s.alicdn.com/@sc04/kf/H80f8775b792c4cc3b1c543d0010efd10h.jpg" alt="" className='h-full w-full' />
            </div>
        </div>
    )
}
