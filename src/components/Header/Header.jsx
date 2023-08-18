import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="news">News</Link>
      <Link to="notices/sell">Find Pet</Link>
      <Link to="friends">Our friends</Link>
    </div>
  )
}

export default Header