import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';
import { mask } from '../../../assets/icons';

const Spotlight = () => {
  return (
    <section className="md:px-40 px-4 mt-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full">
          <ReactPlayer
            url="https://youtu.be/Pl8OlkkwRpc"
            controls
            width={'100%'}
          />
        </div>
        <div>
          <div>
            <h2 className="text-[48px]">In the spotlight</h2>
          </div>
          <div className="">
            <div className="flex items-start md:items-center mt-8 mb-8 flex-wrap flex-col md:flex-row">
              <div className="flex items-center justify-start mb-8 md:mb-0 ml-0">
                <div className="flex items-center justify-center mb-0 md:ml-0">
                  <Image src={mask} />
                </div>
                <div className="ml-5">
                  <h5 className="text-sm text-pink">Asuf</h5>
                  <h6 className="text-sm">Film maker on Netflix</h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="px-8 md:ml-8 ml-0 border-x border-mid-grey-light">
                  <h5 className="text-sm text-mid-grey-light">Category</h5>
                  <h6 className="text-sm">Film</h6>
                </div>
                <div className="px-8">
                  <h5 className="text-sm text-mid-grey-light">NFT</h5>
                  <h6 className="text-sm">7 NFT’s available</h6>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-2">Kasanova</h2>
            </div>
            <div className="mb-6">
              <p className="font-light">
                A romantic comedy about a single dad who falls in love with the
                Mother of his sons Crush. It is a battle for love highlighting
                Family, friendship and love.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-pink w-[176px] py-2 rounded-[50px]">
              Check Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
