import Image from 'next/image';
import React from 'react';
import { character } from '../../../assets/images';

const Card = () => {
  return (
    <section className="border border-light-grey-1 bg-line-light md:p-6 p-2 rounded-xl mt-8">
      <div>
        <div>
          <h3 className="font-light mb-3">Game</h3>
        </div>
        <div>
          <Image src={character} />
        </div>
        <div className="mt-3 mb-3">
          <h2 className="font-bold text-pink">Cyberpunkez</h2>
        </div>
        <div className="mb-3">
          <p className="font-light">
            In Night City, a mercenary known as V navigates a dystopian society.
          </p>
        </div>
        <div>
          <p className="font-light text-light-grey-1">9 available NFT’s</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
