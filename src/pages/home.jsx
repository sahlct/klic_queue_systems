import React, { useEffect } from 'react'
import HomeContent from '../components/homecontent'
import NewTechnology from '../components/newTechnology'
import Costumers from '../components/costumers'
import Clients from '../components/Cleints'

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <HomeContent />
      <NewTechnology />
      <Clients />
      <Costumers />

    </>
  )
}
