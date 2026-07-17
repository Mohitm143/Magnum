import React from 'react'
import WonderfulWorld from '../component/Wonderfulworld'
import Navbar from '../component/Navbar'
import Introduction from '../component/Introduction'
import Chapters from '../component/Chapters'
import AboutSection from '../component/AboutSection'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <WonderfulWorld/>
      <Introduction/>
      <Chapters/>
      <AboutSection/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App