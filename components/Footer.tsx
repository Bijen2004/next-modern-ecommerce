import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-3 items-center p-4 bg-white/5 text-white/40'>
      <div className='flex gap-10'>
        <div>
        Follow Us At:
        </div>
        <div>
            <Link href='https://www.instagram.com/bgarts88/'>Instagram Logo</Link>
        </div>
      </div>
        <div>
        Copyright © 2024 BG Arts
        </div>
    </div>
  )
}

export default Footer