import Image from 'next/image';
import React from 'react';
import { space } from '../../../assets/images';

const About = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-col-1 md:grid-cols-2 md:px-40 px-4">
        <div>
          <h2 className="text-[43px] font-bold text-pink">
            About Martianplace
          </h2>
          <h5 className="text-[22px] font-light mb-8">
            The perfect place to connect Artists and NFT buyers
          </h5>
          <p className="mb-8">
            {
              'MartianPlace is an upcoming NFT marketplace for the entertainment industry with a crowdfunding aspect. It’s a marketplace where creators of games, movie, music and more can share ideas, visions and creative work with the communities that will come together to fund them. Funds can be raised by offering NFT’s that are linked to the project or through donations.'
            }
          </p>
          <div>
            <button className="border border-pink text-white w-[175px] px-10 py-3 rounded-[50px] transition-all ease duration-500 hover:opacity-9">
              Signup
            </button>
          </div>
        </div>

        <div>
          <Image src={space} />
        </div>
      </div>
    </section>
  );
};

export default About;
