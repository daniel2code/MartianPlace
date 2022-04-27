import React from 'react';
import { goldMask } from '../public/assets/images/nfts';
import Image from 'next/image';
import Tab from '../components/elements/tab';
import TabGroup from '../components/elements/tab/tab-group';

const Test = () => {
  return (
    <section>
      {/* <div>
        <h1 className="text-center text-purple-secondary text-3xl">Test</h1>
        <p className="text-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          inventore cum. Nihil quia, ratione reprehenderit esse ipsa sit sed a
          placeat consequatur aspernatur?
        </p>
        <div>
          <button className="bg-button-pink px-32 py-5 border-2 mb-32 mt-20 hover:text-3xl hover:bg-white hover:text-black">
            CLick me
          </button>
        </div>
        <div>
          <Image src={goldMask} />
        </div>
      </div> */}
      <TabGroup />
    </section>
  );
};

export default Test;
