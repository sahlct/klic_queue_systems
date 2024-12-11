import React, { useEffect } from 'react'
import Clients from '../components/Cleints'
import ServiceHome from '../components/serviceHome'

export default function Services() {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-16'>
      <ServiceHome />
      <Clients />
    </div>
  )
}
