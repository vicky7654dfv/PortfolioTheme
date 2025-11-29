import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlogHero from '../../components/BlogHero/BlogHero'
import BlogGrid from '../../components/BlogGrid/BlogGrid'

export default function Blog() {
  return (
    <div>
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </div>
  )
}
