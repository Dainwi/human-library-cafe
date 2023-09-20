import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <span>Human Library Cafe</span>

        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='#about'>About</Link>
          </li>
          <li>
            <Link href='#event'>Event</Link>
          </li>
          <li>
            <Link href='#blog'>Blog</Link>
          </li>
          <li>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header