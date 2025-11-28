import React from 'react'
import Header from '../../components/Header/Header'
import Banner1 from '../../components/Banner1/Banner1'
import Footer from '../../components/Footer/Footer'
import Home1About from '../../components/Home1About/Home1About'
import Skills from '../../components/Skills/Skills'
import ProjectsSection from '../../components/ProjectSection/ProjectsSection'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Banner1 />
        <Home1About />
        <ProjectsSection/>
        <Skills />
        <Footer />
    </div>
  )
}
