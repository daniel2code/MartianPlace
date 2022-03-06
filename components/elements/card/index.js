import Image from 'next/image';
import React from 'react';
import { character } from '../../../assets/images';

const Card = ({ img, charName, description, moreDetail }) => {
  return (
    <section className="border border-light-grey-2 bg-line-light md:p-6 p-2 rounded-xl mt-8 w-full">
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

export default Card;
