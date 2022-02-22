import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.scss'
import Logo from './elements/Logo'
import thelogo from '../public/images/head.svg'
import theprofile from '../public/images/avatar.svg'
import thesearch from '../public/images/search.svg'
import Button from './elements/Button.js'
import Input from './elements/Input'

const Nav = (props) => {
  const { usertoken } = props;

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <Logo title={'Moonshots'} image={thelogo}></Logo>
          </Link>
        </li>
        <li>
          <Link href='/' className="text-[18px] cursor-default">Martianplace</Link>
        </li>
        <li><span>|</span></li>
        <li>
          <Link href='/about' className="nav-link">About</Link>
        </li>
        <li>
          <Link href='/discover' className="nav-link">Discover</Link>
        </li>
        <li>
          <Link href='/create' className="nav-link">Create</Link>
        </li>
        <li>
          <Input leftIcon={{ src: thesearch, alt: 'icon' }} inputstyles="shadow-inner rounded-full px-2 py-1 w-96 border-none
            focus:outline-none" placeHolder="Search digital collectables, art and more" title="Search" size="xs" />
        </li>
      </ul>

      <ul>
        <li>
          <Button
            type='button'
            id={ usertoken ? "btnconnected" : "btnconnect" }
            title={ usertoken ? 'connected' : 'connect' }
            buttonStyles='border border-purple-primary rounded-full py-1.5 px-2 text-[14px] hover:bg-purple-primary'
            onClick={() => { }}
            label={ usertoken ? "Wallet connected" : "Connect Wallet" }/>
        </li>
        <li>
          <a onClick={() => { }} >
            <Image className="rounded-full hover:rounded-lg" src={theprofile} alt={'Profile'}
              width={35} height={35} ></Image>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav