import Image from 'next/image';
import React from 'react';
import { starCup, arrowRight } from '../../../assets/icons';

const CardList = ({ children, icon, title, border }) => {
  return (
    <section className="w-11/12 md:w-4/5 m-auto mt-6">
      <div>
        <div className="flex items-center justify-between mb-4 pb-3" style={{borderBottom: border ? "2px solid #2d333d" : ""}}>
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
              <h5 className='font-semibold text-base'>View All</h5>
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
