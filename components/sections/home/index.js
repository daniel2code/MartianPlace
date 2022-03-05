import Image from 'next/image';
import React from 'react';
import { martian } from '../../../assets/images';

const Main = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-center flex-wrap">
        <div>
          <Image src={martian} />
        </div>
        <div className="ml-12">
          <h2 className="text-[48px] font-bold text-pink">
            Marketplace for creative pioneers
          </h2>
          <p className="text-white text-[21px]">
            Buy, sell and discover rare digital NFT art, cards and collectibles
          </p>
          <div className="flex mt-12">
            <button className="bg-pink rounded-[50px] px-10 py-3">
              Discover
            </button>
            <button className="rounded-[50px] px-10 py-3 ml-4 border border-pink">
              Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;