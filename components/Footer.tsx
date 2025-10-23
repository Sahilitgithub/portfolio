import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center py-6 bg-gradient-to-r from-slate-900 border-t-2 border-pink-600 mt-10' >
      <p className='text-white h2_center text-sm font-semibold'>&copy; All rights reserved by Sahil-it - {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
