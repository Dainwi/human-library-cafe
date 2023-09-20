// import Image from 'next/image'
// import styles from './page.module.css'

import AboutUs from "@/components/AboutUs";
import FeaturedEvent from "@/components/FeaturedEvent";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs/>
      <FeaturedEvent/>
    </>
  )
}
 