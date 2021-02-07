import React from "react"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

export default function Home( { children } ) {
  return <div>
  
  <Header />

    {children}

  <Footer />
</div>
}