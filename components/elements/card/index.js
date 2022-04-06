import Image from 'next/image';
import React from 'react';
import { binance } from '../../../assets/icons';
import { character } from '../../../assets/images';

const Card = ({ img, charName, description, moreDetail }) => {
  return (
    <section className="border border-light-grey-2 bg-line-light md:p-4 p-2 rounded-xl mt-8 w-full">
      <div>
        <div>
          <h3 className="font-light mb-3">Game</h3>
        </div>
        <div className="w-full">
          <Image src={img || character} height={500} width={500} />
        </div>
        {charName && (
          <div className="mt-3 mb-3">
            <h2 className="font-bold text-pink">{charName || 'Cyberpunkez'}</h2>
          </div>
        )}

        {description && (
          <div className="mb-3">
            <p className="font-light">
              {description ||
                'In Night City, a mercenary known as V navigates a dystopian'}
              society.
            </p>
          </div>
        )}
        {moreDetail && (
          <div>
            <p className="font-light text-light-grey-1">
              {moreDetail && '9 available NFT’s'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export const NftCard = ({ img }) => (
  <section className="border border-light-grey-2 bg-line-light md:p-6 p-2 rounded-xl mt-8 w-full">
    <div>
      <div>
        <h3 className="font-light mb-3">Game</h3>
      </div>
      <div className="w-full">
        <Image src={img || character} height={500} width={500} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-light">Cats in Heaven</h4>
          <h4 className="font-light">Price</h4>
        </div>
        <div className="flex items-center justify-between">
          <h4>Picasso Kong #1</h4>
          <h4 className="flex items-center">
            <Image src={binance} />
            <span className="ml-2">4.25</span>
          </h4>
        </div>
      </div>
    </div>
  </section>
);

export default Card;
