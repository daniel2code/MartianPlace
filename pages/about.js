import React from 'react'
import styles from '../styles/About.module.scss';
import spaceImg from '../public/images/space.svg'
import Image from 'next/image';
const about = () => {
  return (
    <div className='mx-5 md:mx-40 sm:mx-10 mt-20 mb-5 flex flex-col'>
      <h1 className='text-[25px] font-bold'>About Martianplace</h1>
      <div className={`${styles.element}`}>
          <p className={`${styles.subTitle} text-pink`}>
            The perfect place to connect Artists and NFT buyers
          </p>
      <p className={`${styles.bodyText}`}>
            MartianPlace is an upcoming NFT marketplace for the entertainment industry with a crowdfunding aspect. It’s
            a marketplace where creators of games, movie, music and more can share ideas, visions and creative work with
            the communities that will come together to fund them. Funds can be raised by offering NFT’s that are linked
            to the project or through donations.
          </p>
          </div>
          {/* <div className=''> */}
          <Image src={spaceImg} ></Image>
          {/* </div> */}
    </div>
  )
}

export default about