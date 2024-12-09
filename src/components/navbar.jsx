import React from 'react'

export default function Navbar() {
    return (
        <div className='fixed top-0 z-50 h-20 w-full bg-gray-200 flex justify-between items-center px-10'>
            <div className='flex gap-8'>
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
            </div>
            <div className='relative'>
                <h1 className='text-4xl font-bold'>Klic</h1>
                <div className='absolute -right-5 top-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-badge-tm"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M6 9h4" /><path d="M8 9v6" /><path d="M13 15v-6l2 3l2 -3v6" /></svg>
                </div>
            </div>
            <div className='flex gap-8'>
                <button>Products</button>
                <button>Contact</button>
            </div>
        </div>
    )
}
