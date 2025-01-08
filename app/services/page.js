import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Service1 from './Service1'
import Service3 from './Service3'
import Head from 'next/head'

function page() {
  return (
    <>
    <Head>
            <title></title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="" />
            <meta name="author" content="" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
  
    <div>
      <Nav/>
      <div className='mt-20 space-y-16 md:space-y-20'>
        <About/>
        <Service1/>
        <Service3/>
        <ContactUs/>
      </div>
    </div>
    </>
  )
}

export default page
