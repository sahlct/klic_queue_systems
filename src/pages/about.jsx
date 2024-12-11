import React, { useEffect } from 'react'
import AboutUs from '../components/aboutUs'
import AboutText from '../components/aboutText'

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-20'>
      <AboutText />
      <AboutUs />
    </div>
  )
}
