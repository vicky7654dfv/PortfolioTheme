import React from 'react'
import ServicesHero from '../../components/ServicesHero/ServicesHero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ServiceCarousel from '../../components/ServiceCarousel/ServiceCarousel'
import SampleWebsites from '../../components/SampleWebsites/SampleWebsites'
import ProcessFlow from '../../components/ProcessFlow/ProcessFlow'

export default function Services() {
  return (
    <div>
      <Header />
      <ServicesHero />
      <ServiceCarousel />
      <SampleWebsites />
      <ProcessFlow />
      <Footer />
    </div>
  )
}
