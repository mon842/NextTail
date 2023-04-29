import React from 'react';
import { Black_Ops_One} from 'next/font/google';
import Navbar from '@/Components/Navbar/Navbar';
import Banner from '@/Components/Banner/Banner';
import About from '@/Components/About/About';
import Tcarousel from '@/Components/TeamCarousel/Tcarousel';
import Sponser from "@/Components/Sponser/sponser";
import Contact from "@/Components/Contact/contact"
import Footer from "@/Components/Footer/Footer";
const blackopsone = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']
})


const index = () => {

  return (

    <div className={blackopsone.className}>
      {/* Navbar */}
      <Navbar/>

      {/* banner section */}
      <Banner/>

      {/*  About section   */}
      <About/>

      {/* team carousel */}
      <Tcarousel/>
        {/*Sponser */}
        <Sponser />
        <Contact />
        <Footer />
    </div>
  )
}

export default index

