import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from'./components/about/about'
import Experience from './components/Experience/Experience'
import Service from './components/services/services'
import Profile from './components/profile/profile'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Service/>
            <Profile/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App