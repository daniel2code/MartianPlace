import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'
import Link from 'next/link'

import { connect, disconnect, switchNetwork } from '../store/slices/userSlice'

import Nav from './Nav'
import styles from '../styles/Layout.module.scss'
import thetelegram from '../public/images/telegram2.svg'
import theinsta from '../public/images/insta2.svg'
import thetwitter from '../public/images/twitter2.svg'
import Modal from '../components/Modal'
import metamaskImg from '../public/images/metamask.svg';
import userImg from '../public/images/ic-user-2.svg';
import walletImg from '../public/images/wallet.svg';
import copyImg from '../public/images/copy.svg';
import bnbImg from '../public/images/bnb.svg';
import ethImg from '../public/images/eth.svg';
import menuImg from '../public/images/ic-dots.svg';
import arrDownImg from '../public/images/arrow-down.svg';
import Button from '../components/elements/Button';
import { clearMessage } from '../store/slices/messageSlice';

const Layout = ({ children }) => {

  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const [showDisconnectBtn, setShowDisconnectBtn] = useState(false);
  const [switchNetworkBtn, setSwitchNetworkBtn] = useState(false);
  // 
  const modalRef1 = React.createRef();
  const modalRef2 = React.createRef();

  useEffect(() => {

    if(user && !user.userNetwork){
      dispatch(switchNetwork({userNetwork: 'BNB'}))
    }

    if (message.message) {
      // alert('message here: ', message.message);
      setAlertOpen(true);
    } else {
      setAlertOpen(false)
    }

  }, [modalOpen, user, message]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const toggleAlert = () => setAlertOpen(!alertOpen);

  const onWallet = () => {
    // if (modalOpen) {

    // }
    // else {
    toggleModal()
    // }
  }

  const connectWallet = () => {
    dispatch(connect({ address: 'fh', userToken: 'fh' }))
    // toggleModal();
  }

  const disconnectWallet = () => {
    dispatch(disconnect())
    // toggleModal();
  }

  const copyWallet = () => {

    alert("Copied!")

  }

  const dropMenu = () => {

    alert("Under implementation")

  }

  const switchWNetwork = () => {

    //Disconnect wallet, connect to wallet, get response or reload the page and connect again

    var userN = user.userNetwork;
    if (userN == 'BNB'){
      userN = 'ETH'
    }else{
      userN = 'BNB'
    }
    dispatch(switchNetwork({ userNetwork: userN }))
    // toggleModal();
  }

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
      <div className={[styles.container].join(' ')}>
        <div className={styles.content}>
          <Nav onWallet={onWallet} />
          <main className={[styles.main].join(' ')}>
            <section className={styles.section}>
              {children}

            </section>

          </main>
        </div>
        {/* <div className={styles.backg}>
          <div className={styles.banner}>
            {children.banner && <Image src={children.banner} alt={children.banner} layout="fill" objectFit='cover'></Image>}
          </div>
          <div className={styles.bottom}></div>
        </div> */}
      </div>
      <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <div>
            <p className={styles.rightsText}>© 2022 Martianplace</p>
          </div>

          <div className={styles.iconsBox}>
            <Link href="#"><span><Image src={thetelegram} alt="icon" width={25} height={25} /></span></Link>
            <Link href="#"><span><Image src={theinsta} alt="icon" width={25} height={25} /></span></Link>
            <Link href="#"><span><Image src={thetwitter} alt="icon" width={25} height={25} /></span></Link>
          </div>

          <div className={styles.textBox}>
            <p>Privacy policy</p>

            <p>Terms of service</p>
          </div>
        </footer>
      </div>


      <div className='modal'>

        {user.userToken ?

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
                    <div>
                      <Button
                        type='button'
                        id="disconnectW"
                        buttonStyles='text-purple-secondary mr-1 font-light hover:pr-1 pb-1 hover:underline decoration-purple-secondary'
                        onClick={disconnectWallet}
                        onMouseEnter={() => setShowDisconnectBtn(true)}
                        onMouseLeave={() => setShowDisconnectBtn(false)}>
                        <h5>{showDisconnectBtn ? `Disconnect` : `0xb1f..fe14ed`}</h5>
                      </Button>
                    </div>
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
                <div className='flex flex-row py-2 px-5 border-t border-t-1 border-t-mid-grey-4 justify-center'>
                <div className='mb-1'>
                 <Button
                  type='button'
                  id="switchN"
                  buttonStyles='float-right text-purple-secondary font-light hover:pr-1 pb-1 underline decoration-purple-secondary'
                  onClick={switchWNetwork}
                  onMouseEnter={() => setSwitchNetworkBtn(true)}
                  onMouseLeave={() => setSwitchNetworkBtn(false)}>
                    <div className='flex flex-row'>
                    {switchNetworkBtn && <h5 className='self-center mr-1'>{`Switch Network`}</h5>}
                    {user.userNetwork == "BNB" ? <Image src={ethImg} alt={'eth'} width={25} height={25}></Image>
                    :<Image src={bnbImg} alt={'bnb'} width={25} height={25}></Image>}
                  </div>
                </Button>
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

        {alertOpen ?
          <div className='alert'>
            okayyyy
            {/* Adding new alert here*/}
            {/* <Modal headerCloseBtn={
            <Button
              type='button'
              id="headerClose"
              buttonStyles='mr-4 text-xl'
              onClick={toggleAlert}>
              <h1 className='font-semibold text-input-text-light hover:text-purple-primary hover:pr-1'>x</h1>
            </Button>
          }
            setModalOpen={toggleAlert} modalOpen={alertOpen} parentStyles="w-80 rounded-md border border-1 border-mid-grey-4 bg-[#222529]"
            modalBody={(
              <div>
                <div className='flex flex-row py-2 px-5 border-b border-b-1 border-b-mid-grey-4'>
                  <Image src={userImg} alt={'user'} width={14} height={14}></Image>
                  <h5 className='text-white ml-3 font-medium'>{`My Profile2`}</h5>
                </div>
                <div className='flex flex-row py-2 px-5 border-b border-b-1 border-b-mid-grey-4 justify-between'>
                  <div className='flex flex-row'>
                    <Image src={walletImg} alt={'wallet'} width={18} height={18}></Image>
                    <h5 className='text-white ml-3 font-medium'>{`My Wallet2`}</h5>
                  </div>
                  <div className='flex flex-row'>
                    <div>
                      <Button
                        type='button'
                        id="disconnectW"
                        buttonStyles='text-purple-secondary mr-1 font-light hover:pr-1 pb-1 hover:underline decoration-purple-secondary'
                        onClick={disconnectWallet}
                        onMouseEnter={() => setShowDisconnectBtn(true)}
                        onMouseLeave={() => setShowDisconnectBtn(false)}>
                        <h5>{showDisconnectBtn ? `Disconnect` : `0xb1f..fe14ed`}</h5>
                      </Button>
                    </div>
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
            )} /> */}
          </div>
          : null
        }
      </div>

    </>
  )
}

export default Layout