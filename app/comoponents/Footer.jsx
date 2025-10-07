import React from 'react'

const Footer = ({language}) => {
  return (
    <section className='bg-sky-950 text-xs text-center p-5'>
      {language === "EN" ? "Made with 🤍... Mahmud Al Hussen" : "Mit 🤍 gemacht... Mahmud Al Hussen"}
    </section>
  )
}

export default Footer