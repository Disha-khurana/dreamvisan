import React from 'react'
import Nav from '../components/Nav'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Working from '../components/Working'
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
     <AboutUs/>
    
     <Services/>
     <Working/>
     <ContactUs/>

     </div>

    </div>
    </>
  )
}

export default page
