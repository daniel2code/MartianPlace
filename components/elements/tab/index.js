import Image from 'next/image';
import React from 'react';
import { starCup } from '../../../public/assets/icons';

const Tab = ({ activeIcon, baseIcon, label, active, onClick }) => {
  return (
    <div className="py-4 pb-0" onClick={onClick}>
      <div className="flex items-center">
        <div className="flex items-center justify-center">
          {active ? (
            <Image src={activeIcon || starCup} height={50} width={50} />
          ) : (
            <Image src={baseIcon || starCup} height={50} width={50} />
          )}
        </div>
        <div>
          <p
            className={`ml-5 transition-all duration-500 ease-linear ${
              active ? ' text-white' : 'text-purple-secondary'
            }`}
          >
            {label || ' All'}
          </p>
        </div>
      </div>
      {active && (
        <div className="h-[1px] border-b-2 border-white w-16 pt-3 mb-0"></div>
      )}
    </div>
  );
};

export default Tab;
