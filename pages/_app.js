
import React, { useState, useEffect, useCallback, useRef } from 'react';

import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Modal from '../components/Modal';
import Image from 'next/image';
import metamaskImg from '../public/images/metamask.svg';
import userImg from '../public/images/ic-user-2.svg';
import walletImg from '../public/images/wallet.svg';
import copyImg from '../public/images/copy.svg';
import bnbImg from '../public/images/bnb.svg';
import menuImg from '../public/images/ic-dots.svg';
import Button from '../components/elements/Button';

function MyApp({ Component, pageProps }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [usertoken, setUserToken] = useState(null);

  // const modalRef = useRef(null);
  const modalRef1 = React.createRef();
  const modalRef2 = React.createRef();

  const toggleModal = () => setModalOpen(!modalOpen);

  const connectWallet = () => {
    setUserToken('')
    //set usertoken in asyncstorage
    toggleModal();
  }

  const disconnectWallet = () => {
    setUserToken(null)
    //clear usertoken in asyncstorage
    toggleModal();
  }

  const copyWallet = () => {

    alert("Copied!")

  }

  const dropMenu = () => {

    alert("Under implementation")

  }

  useEffect(() => {

    // setUserToken("fh")

    // if (!modalOpen) return;
    // function handleClick(event) {
    //   if (modalRef1.current && !modalRef1.current.contains(event.target)) {
    //     alert('clicking outside');

    //     setModalOpen(false);
    //   }
    // }
    // window.addEventListener("click", handleClick);
    // // clean up
    // return () => window.removeEventListener("click", handleClick);
  }, [modalOpen]);

  const closeBtn = () => {
    (
      <div>
        <Button
          type='button'
          id="headerClose"
          buttonStyles='mr-4 text-xl'
          onClick={toggleModal}>
          <h1 className='font-bold text-input-text-light hover:text-purple-primary hover:pr-1'>x</h1>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Layout onWallet={toggleModal} usertoken={usertoken}>
        <Component {...pageProps} />
      </Layout>
      <div className='modal'>

        {usertoken ?

          <Modal ref={modalRef1} headerCloseBtn={
            <Button
              type='button'
              id="headerClose"
              buttonStyles='mr-4 text-xl'
              onClick={toggleModal}>
              <h1 className='font-semibold text-input-text-light hover:text-purple-primary hover:pr-1'>x</h1>
            </Button>
          }
            setModalOpen={toggleModal} modalOpen={modalOpen} parentStyles="w-80 rounded-md border border-1 border-mid-grey-4 bg-[#222529]"
            modalBody={(
              <div>
                <div className='flex flex-row py-2 px-5 border-b border-b-1 border-b-mid-grey-4'>
                  <Image src={userImg} alt={'user'} width={14} height={14}></Image>
                  <h5 className='text-white ml-3 font-medium'>{`My Profile`}</h5>
                </div>
                <div className='flex flex-row py-2 px-5 border-b border-b-1 border-b-mid-grey-4 justify-between'>
                  <div className='flex flex-row'>
                    <Image src={walletImg} alt={'wallet'} width={18} height={18}></Image>
                    <h5 className='text-white ml-3 font-medium'>{`My Wallet`}</h5>
                  </div>
                  <div className='flex flex-row'>
                    <h5 className='text-purple-secondary mr-1 font-light'>{`0xb1f..fe14ed`}</h5>
                    <div>
                      <Button
                        type='button'
                        id="copy"
                        buttonStyles='hover:pl-1'
                        onClick={copyWallet}>
                        <Image src={copyImg} alt={'copy'} width={15} height={15}></Image>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='text-center m-5'>
                  <span className='text-input-text-light'>Total Balance</span>
                  <h1 className='font-bold text-white font-[20px]'>3.485 BNB</h1>
                  <span className='text-input-text-light font-[17px]'>$1248.56</span>

                  <div className='mt-5 mb-6'>
                    <Button
                      type='button'
                      id={`addFunds`}
                      buttonStyles='border border-purple-primary rounded-full w-36 text-white py-2 text-[14px] hover:bg-purple-primary'
                      onClick={() => { }}
                      label={`Add funds`} />
                  </div>
                </div>
                <div className='flex flex-row py-1 px-2 m-5 justify-between rounded-md border border-1 border-input-text-light'>
                  <div className='flex flex-row'>
                    <Image src={bnbImg} alt={'bnb'} width={15} height={15}></Image>
                    <h5 className='text-white ml-2 self-center'>{`BNB`}</h5>
                  </div>
                  <div className='flex flex-row'>
                    <div className='text-sm'>
                      <div><h6 className='text-white'>0.0163</h6></div>
                      <div><h6 className='text-input-text-light'>$38.05</h6></div>
                    </div>
                    <div className='self-center ml-2'>
                      <Button
                        type='button'
                        id="walletmenu"
                        buttonStyles='hover:pl-1'
                        onClick={dropMenu}>
                        <Image src={menuImg} alt={'menu'} width={15} height={15}></Image>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )} />

          :

          <Modal ref={modalRef2} headerCloseBtn={
            <Button
              type='button'
              id="headerClose"
              buttonStyles='mr-2 text-xl'
              onClick={toggleModal}>
              <h1 className='font-semibold text-input-text-light hover:text-purple-primary hover:pr-1'>x</h1>
            </Button>
          }
            setModalOpen={toggleModal} modalOpen={modalOpen} title="Connect Wallet"
            titleStyles="text-pink font-semibold justify-self-start" footer="How do I create a metamask wallet?"
            footerStyles="text-input-text-light justify-self-start"
            parentStyles="py-5 px-4 w-80 rounded-md border border-1 border-mid-grey-4 bg-[#222529]"
            modalBody={(
              <div className='flex flex-row py-2 px-2 my-5 justify-between rounded border border-1 border-input-text-light'>
                <div className='flex flex-row'>
                  <Image src={metamaskImg} alt={'metamask'} width={20} height={20}></Image>
                  <h5 className='text-white ml-2'>{`Metamask`}</h5>
                </div>
                <div>
                  <Button
                    type='button'
                    id="connect"
                    buttonStyles='text-input-text-light hover:text-purple-primary hover:pr-1 hover:underline'
                    onClick={connectWallet}
                    label="Connect">
                  </Button>
                </div>
              </div>
            )} />}
      </div>
    </>
  )
}

export default MyApp
