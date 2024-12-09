import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='w-full bg-gray-200 h-min flex flex-col items-center px-5 md:px-0'>
            <img src="https://www.poshhiveinnovates.com/assets/img/logo/LOGO.svg" alt="" className='w-[100px] h-[100px] md:h-[150px] md:w-[150px]' />
            {/* <div className='relative mb-3'>
                <h1 className='text-4xl text-white font-bold'>Klic</h1>
                <div className='absolute -right-5 top-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-badge-tm"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M6 9h4" /><path d="M8 9v6" /><path d="M13 15v-6l2 3l2 -3v6" /></svg>
                </div>
            </div> */}
            <div>
                <ul class="example-2">
                    <li class="icon-content">
                        <a
                            href="tel:+919745956330"
                            aria-label="LinkedIn"
                            data-social="linkedin"
                        >
                            <div class="filled"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        </a>
                        <div class="tooltip">Phone</div>
                    </li>
                    <li class="icon-content">
                        <a href="https://wa.me/919745956330" aria-label="GitHub" data-social="github">
                            <div class="filled"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                        </a>
                        <div class="tooltip">Whatsapp</div>
                    </li>
                    <li class="icon-content">
                        <a
                            href="https://www.instagram.com/herfysoftcake?igsh=a2d5bDZ1NmtyNHU2"
                            aria-label="Instagram"
                            data-social="instagram"
                        >
                            <div class="filled"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                        </a>
                        <div class="tooltip">Instagram</div>
                    </li>
                    <li class="icon-content">
                        <a href="https://g.co/kgs/WWKtHkC" aria-label="Youtube" data-social="youtube">
                            <div class="filled"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                        </a>
                        <div class="tooltip">Location</div>
                    </li>
                </ul>
            </div>
            <p className='text-black md:text-sm text-xs mt-5'>Klic Products <span className='text-yellow-500'>||</span> Eranippadi, Kannamangalam(po) <span className='text-yellow-500'>||</span> Vengara, Malappuram</p>
            <p className='text-black md:text-sm text-xs'>tel: 0494-8888888 <span className='text-yellow-500'>||</span> Call : +91 ###########</p>
            {/* <hr className='text-white'/> */}
            <p className='text-black text-xs md:pt-10 pt-5 pb-2 md:pb-5'>copyright alright reserved @ poshiveInnovates.com</p>
        </div>
    )
}
