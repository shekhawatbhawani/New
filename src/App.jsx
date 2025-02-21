import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './Comoponents/Navbar'
import HeroSection from './Comoponents/Home'
import AboutMe from './Comoponents/About'
import Skills from './Comoponents/Skills'
import HobbiesAndInterests from './Comoponents/HobbiesAndInterests'
import Passions from './Comoponents/Passions'
import AcademicBackground from './Comoponents/Academic'
import WorkExperience from './Comoponents/WorkExperience'
import Certifications from './Comoponents/Certifications'

function App() {


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/hobbies' element={<HobbiesAndInterests/>}></Route>
        <Route path='/passions' element={<Passions/>}></Route>
        <Route path='/academic' element={<AcademicBackground/>}></Route>
        <Route path='/work' element={<WorkExperience/>}></Route>
        <Route path='/certifications' element={<Certifications/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
