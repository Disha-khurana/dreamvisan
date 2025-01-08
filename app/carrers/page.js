import Head from 'next/head'
import React from 'react'
import Nav from '../components/Nav'
import Carrer from './Carrer'
import Form2 from '../components/Form2'

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
    
    <div >
        <Nav/>
        <div className='mt-20 space-y-16 md:space-y-20'>
            <Carrer/>
            <Form2/>

        </div>
      
    </div>
    </>
  )
}

export default page
