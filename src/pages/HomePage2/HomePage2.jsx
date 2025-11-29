import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import TextMarquee from '../../components/TextMarquee/TextMarquee'
import ClientLogos from '../../components/ClientLogos/ClientLogos'
import Testimonials from '../../components/Testimonials/Testimonials'
import CreativeCarousel from '../../components/CreativeCarousel.jsx/CreativeCarousel'

export default function HomePage2() {
  return (
    <div>
      <Header />
      <ProjectHero />
      <TextMarquee />
      <ClientLogos />
      <Testimonials />
      <CreativeCarousel />
      <Footer />
    </div>
  )
}
