import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.scss';
import Logo from './elements/Logo';
import thelogo from '../public/images/head.svg';
import theprofile from '../public/images/avatar.svg';
import thesearch from '../public/images/search.svg';
import metamaskImg from '../public/images/metamask.svg';

import MenuIcon from '../public/images/menu.svg';
import CloseIcon from '../public/images/close.svg';
import Button from './elements/Button.js';
import Input from './elements/Input';
import Search from './elements/Search';

import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { nftaddress, nftmarketaddress } from '../config';
import nftABI from '../nftABI.json';
import marketABI from '../marketABI.json';
import axios from 'axios';

const Nav = props => {
  const { onWallet, selectCreateAction } = props;

  const { active } = useWeb3React();

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const loadNFTs = async() => {
    setLoading(true)
    // const provider = new ethers.providers.JsonRpcProvider()
    // const tokenContract = new ethers.Contract(nftaddress, nftABI, provider)
    // const marketContract = new ethers.Contract(nftmarketaddress, marketABI, provider)

    //get signer
    window.ethereum.enable()
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner()

    let marketContract = new ethers.Contract(nftmarketaddress, marketABI, signer)


    //call market items from the market contract
    const data = await marketContract.fetchMarketItems()

    console.log("data: ", data)

    const items = await Promise.all(data.map(async i => {
      // const tokenUri = await tokenContract.tokenUri(i.tokenid)
      // const meta = await axios.get(tokenUri)
      // let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      // let item = {
      //   price,
      //   tokenId: i.tokenId.toNumber(),
      //   seller: i.seller,
      //   owner: i.owner,
      //   image: meta.data.image,
      //   name: meta.data.name,
      //   description: meta.data.description,
      // }
      // return item
    }))

    setNfts(items)
    setLoading(false)

  }

  useEffect(() => {
    // loadNFTs()
    // console.log('userToken: ', user.userToken);
  }, [user, openMenu]);

  return (
    <>
      <nav
        className={`${navStyles.nav} flex flex-wrap justify-between pt-3 lg:px-2`}
      >
        <ul className="flex">
          <li className="m-2 lg:m-0">
            <Link href="/">
              <span>
                <Logo title={'Moonshots'} image={thelogo}></Logo>
              </span>
            </Link>
          </li>
          <li className="hidden lg:block mt-2 mx-3">
            <Link href="/" className="text-[18px] cursor-default">
              Martianplace
            </Link>
          </li>
          <li className="hidden lg:block mt-2 mx-3">
            <span>|</span>
          </li>
          <li className="hidden lg:block mt-2 mx-3">
            <Link href="/about">About</Link>
          </li>
          <li className="hidden lg:block mt-2 mx-3">
            <Link href="/discover">Discover</Link>
          </li>
          <li className="hidden lg:block mt-2 mx-3">
            <Link href={"/"}>
            <Button
                type="button"
                id="btnAcions"
                // buttonStyles="mr-4 text-xl"
                onClick={selectCreateAction}
              >
                <h1 className='hover:text-pink' >
                  create
                </h1>
              </Button></Link>
          </li>
          <li>
            {/* <Search /> */}
            <Input
              leftIcon={{ src: thesearch, alt: 'icon' }}
              inputstyles={`shadow-inner lg:px-2 px-1 py-1 md:w-96 w-60 border-none
            focus:outline-none bg-color-search-input-bg)]`}
              placeHolder="Search digital collectables, art and more"
              title="Search"
              onChange={()=>{}}
              size="xs"
              parentstyles={`lg:ml-2 rounded-full border border-1 border-purple-primary bg-search-bg lg:pl-3 pl-2`}
            />
          </li>
        </ul>

        <ul className="flex">
          <li className="hidden lg:block mt-2 mx-3">
            <Button
              type="button"
              id={user.userToken ? 'btnconnected' : 'btnconnect'}
              buttonStyles="lg:border lg:border-purple-primary lg:rounded-full lg:py-1.5 lg:px-2 lg:text-[14px] lg:hover:bg-background-gradient-btn"
              onClick={onWallet}
            >
              <span className="hidden lg:block w-36">
                {active ? 'Logout' : 'Connect Wallet'}
              </span>
              {/* <span className="lg:hidden mb-2"><Image src={metamaskImg} alt={'wallet'}
              width={35} height={35} ></Image>
              </span> */}
            </Button>
          </li>
          {active && (
            <li className="lg:mt-2 lg:mx-3 mr-5">
              <div className="">
                <a onClick={() => { }} >
                  <Image
                    className="rounded-full hover:rounded-lg"
                    src={theprofile}
                    alt={'Profile'}
                    width={35}
                    height={35}
                  ></Image>
                </a>
              </div>
            </li>
          )}
          <li className="lg:hidden mr-2 mt-1">
            <Button type="button" id={'mobilemenu'} onClick={handleMobileMenu}>
              {openMenu ? (
                <Image
                  src={CloseIcon}
                  alt={'menu'}
                  width={26}
                  height={26}
                ></Image>
              ) : (
                <Image
                  src={MenuIcon}
                  alt={'menu'}
                  width={26}
                  height={26}
                ></Image>
              )}
            </Button>
          </li>
        </ul>
        <div
          className={`${
            openMenu ? '' : 'hidden'
          } transition-all delay-150 duration-500 lg:hidden w-full inline-flex flex-grow w-auto py-2`}
        >
          <div className="w-full items-start  flex flex-col ">
            <Link href="/">
              <a className="border-b border-b-1 border-b-mid-grey-4 w-full px-3 py-4 text-white items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="border-b border-b-1 border-b-mid-grey-4 w-full px-3 py-4 text-white items-center justify-center hover:bg-green-600 hover:text-white">
                About
              </a>
            </Link>
            <Link href="/discover">
              <a className="border-b border-b-1 border-b-mid-grey-4 w-full px-3 py-4 text-white items-center justify-center hover:bg-green-600 hover:text-white">
                Discover
              </a>
            </Link>
            <Link href="/create">
              <a className="border-b border-b-1 border-b-mid-grey-4 w-full px-3 py-4 text-white items-center justify-center hover:bg-green-600 hover:text-white">
                Create
              </a>
            </Link>
            <div className="mt-9 w-full flex justify-center">
              <Button
                type="button"
                id={user.userToken ? 'btnconnected' : 'btnconnect'}
                buttonStyles="w-80 border border-purple-primary rounded-full py-1.5 px-2 text-[14px] bg-background-gradient-btn"
                onClick={onWallet}
              >
                <span className="">
                  {active ? 'Logout' : 'Connect Wallet'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;