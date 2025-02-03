import Link from 'next/link'

const Nav = () => {
  return (
    <div className='navbar'>
      <h1 >MY WEB</h1>
      <ul className='ul'>
        <li><Link className='link' href={'/'}>Home</Link></li>
        <li><Link className='link' href={'/components/about'}> About</Link></li>
        <li><Link className='link' href={'/components/contact'}>Contact</Link></li>
      </ul>
      <h1>Cart</h1>
    </div>
  )
}

export default Nav
