import Image from 'next/image';
import React from 'react';
import { starCup, arrowRight } from '../../../assets/icons';

const CardList = ({ children, icon, title }) => {
  return (
    <section className="w-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {icon && (
              <div className="flex items-center justify-center">
                <Image src={icon || starCup} />
              </div>
            )}
            {title && (
              <h5 className="ml-4 font-bold">
                {' '}
                {title || 'Trending Projects'}
              </h5>
            )}
          </div>
          {title && (
            <div className="flex items-center">
              <h5>View All</h5>
              <div className="ml-4">
                <Image src={arrowRight} />
              </div>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-4 gap-4 items-center justify-items-center grid-cols-1">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CardList;
