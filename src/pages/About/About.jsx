import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import VisionMission from '../../components/VisionMission/VisionMission'
import CoreValues from '../../components/CoreValues/CoreValues'
import CreativeSplit from '../../components/CreativeSplit/CreativeSplit'

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <CoreValues />
      <VisionMission />
      <CreativeSplit />
      <Footer />
    </div>
  )
}
