import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { discord, marketplace, twitter } from '../../../assets/icons';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between text-white font-light py-6 px-5 border-t-2 border-light-grey-2">
      <div className='text-base' >@ 2022 Martianplace</div>
      <div className="flex">
        <div>
          <Link href="https://mobile.twitter.com/martianplace1">
            <Image src={discord} />
          </Link>
        </div>
        <div className="ml-3">
          <Link href="https://discord.gg/mHdkMvHgrd">
            <Image src={twitter} />
          </Link>
        </div>
        <div className="ml-3">
          <Link href="mailto:info@martianplace.io">
            <Image src={marketplace} />
          </Link>
        </div>
      </div>
      <div className="md:flex items-center hidden">
        <p className='text-base'>Privacy Policy</p>
        <p className="ml-3 text-base">Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
