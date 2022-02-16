import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.scss'
import Logo from './elements/Logo'
import thelogo from '../public/images/head.svg'
import theprofile from '../public/images/avatar.svg'
import Button from './elements/Button.js'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <div>

              {/* Logo component */}
              <Logo title={'Moonshots'} image={thelogo}></Logo>

            </div>
          </Link>
        </li>
        <li>
          <a className='text-[18px]'>Martianplace</a>
        </li>
        <li><span>|</span></li>
        <li>
          <Link href='/about' className="nav-link">About</Link>
        </li>
        <li>
          <Link href='/discover' className="nav-link">Discover</Link>
        </li><li>
          <Link href='/create' className="nav-link">Create</Link>
        </li>
        <li>
          <span>

            search component

          </span>
        </li>
      </ul>

      <ul>
        <li>
        <div className=''>
      <button
        type='button'
        id="btnconnected"
        title='ok'
        className='border border-purple-primary rounded-full py-1.5 px-2 text-[14px]'
        onClick={() =>{}}>Wallet connected
      </button>
    </div>
        </li>
        <li>
            {/* <Button
                label="Wallet connected"
                title="Wallet connected"
                type="button"
                buttonStyle="Primary"
                onClick={() => { }}
              /> */}
        </li>
        <li>
          <a onClick={() => { }}>
            <Image className="rounded-full" src={theprofile} alt={'Profile'}
              width={35} height={35} ></Image>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav