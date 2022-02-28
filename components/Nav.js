import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.scss'
import Logo from './elements/Logo'
import thelogo from '../public/images/head.svg'
import theprofile from '../public/images/avatar.svg'
import thesearch from '../public/images/search.svg'
import Button from './elements/Button.js'
import Input from './elements/Input'
import Search from './elements/Search'

const Nav = (props) => {
  const { onWallet } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('userToken: ', user.userToken);
  }, [user])

  return (
    <nav className={navStyles.nav} >
      <ul>
        <li>
          <Link href='/'>
            <span><Logo title={'Moonshots'} image={thelogo}></Logo></span>
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
        {/* <Search /> */}
          <Input leftIcon={{ src: thesearch, alt: 'icon' }} inputstyles={`shadow-inner px-2 py-1 w-96 border-none
            focus:outline-none bg-color-search-input-bg)]`} placeHolder="Search digital collectables, art and more" title="Search" size="xs" 
            parentstyles={`ml-2 rounded-full border border-1 border-purple-primary bg-search-bg pl-3`} />
        </li>
      </ul>

      <ul>
        <li>
          <Button
            type='button'
            id={ user.userToken ? "btnconnected" : "btnconnect" }
            buttonStyles='border border-purple-primary rounded-full py-1.5 px-2 text-[14px] hover:bg-background-gradient-btn'
            onClick={onWallet}
            label={ user.userToken ? "Wallet connected" : "Connect Wallet" }/>
        </li>
        <li>
          <div className='pt-2'>
          <a onClick={() => { }} >
            <Image className="rounded-full hover:rounded-lg" src={theprofile} alt={'Profile'}
              width={35} height={35} ></Image>
          </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav