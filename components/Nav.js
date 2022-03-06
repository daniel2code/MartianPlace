import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.scss';
import Logo from './elements/Logo';
import thelogo from '../public/images/head.svg';
import theprofile from '../public/images/avatar.svg';
import thesearch from '../public/images/search.svg';
import Button from './elements/Button.js';
import Input from './elements/Input';
import Search from './elements/Search';

const Nav = props => {
  const { onWallet } = props;
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const loadNFTs = async () => {
    setLoading(true);
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, nftABI.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      marketABI.abi,
      provider
    );

    //call market items from the market contract
    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async i => {
        const tokenUri = await tokenContract.tokenUri(i.tokenid);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoading(false);
  };

  useEffect(() => {
    console.log('userToken: ', user.userToken);
  }, [user]);

  return (
    <nav className={navStyles.nav}>
      <ul className="flex">
        <li className="flex">
          <Link href="/">
            <span>
              <Logo title={'Moonshots'} image={thelogo}></Logo>
            </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[18px] cursor-default">
            Martianplace
          </Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <ul>
          <li>
            <span>|</span>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/discover" className="nav-link">
              Discover
            </Link>
          </li>
          <li>
            <Link href="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li>
            <Input
              leftIcon={{ src: thesearch, alt: 'icon' }}
              inputstyles={`shadow-inner px-2 py-1 w-96 border-none
            focus:outline-none bg-color-search-input-bg)]`}
              placeHolder="Search digital collectables, art and more"
              title="Search"
              size="xs"
              parentstyles={`ml-2 rounded-full border border-1 border-purple-primary bg-search-bg pl-3`}
            />
          </li>
        </ul>
      </div>
      <div>
        <Button
          type="button"
          id={user.userToken ? 'btnconnected' : 'btnconnect'}
          buttonStyles="border border-purple-primary rounded-full py-1.5 px-2 text-[14px] hover:bg-background-gradient-btn"
          onClick={onWallet}
          label={user.userToken ? 'Wallet connected' : 'Connect Wallet'}
        />
      </div>
      <div className="hidden md:block">
        <ul>
          <li>
            <div className="pt-2">
              <a onClick={() => {}}>
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
