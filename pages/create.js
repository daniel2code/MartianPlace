import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux"

import { setMessage, clearMessage } from '../store/slices/messageSlice'
import { switchNetwork } from '../store/slices/userSlice';

import styles from '../styles/Create.module.scss';
// import { DESC } from '../public/contants';
import imgPlaceholder from '../public/images/pic.svg'
import FileUploaderDND from '../components/elements/FileUploaderDND';
import Input from '../components/elements/Input';
import TextArea from '../components/elements/TextArea';
import Dropdown from '../components/elements/DropDown';
import Button from '../components/elements/Button';
import Alert from '../components/alert';
import bnbImg from '../public/images/bnb.svg';
import ethImg from '../public/images/eth.svg';

import { create } from 'ipfs-http-client';
import Web3 from 'web3';
import { ethers } from 'ethers';

import { nftaddress, nftmarketaddress } from '../config';

import nftABI from '../nftABI.json';
import marketABI from '../marketABI.json';

export default function Create() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  const [image, setImage] = useState('');
  const [project, setProject] = useState('');
  const [nftName, setNftName] = useState('');
  const [description, setDescription] = useState('');
  const [mintAmt, setMintAmt] = useState('');
  const [royalties, setRoyalties] = useState('');
  const [priceInitial, setPriceInitial] = useState('');
  const [priceNow, setPriceNow] = useState('');
  const [address, setAddress] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [switchNetworkBtn, setSwitchNetworkBtn] = useState(false);

  const items = [
    {
      label: "January",
      value: "january"
    },
    {
      label: "February",
      value: "february"
    },
    {
      label: "March",
      value: "march"
    },
  ];

  const handleChange = (event) => {
    setProject(event.target.value);
  };
  const setImageAction = (img) => {
    console.log(img);
    setImage(img);
  };

  useEffect(() => {
    if (user && !user.userNetwork) {
      dispatch(switchNetwork({ userNetwork: 'BNB' }))
    }

  }, [image, user])

  const switchWNetwork = () => {

    //Disconnect wallet, connect to wallet, get response or reload the page and connect again

    var userN = user.userNetwork;
    if (userN == 'BNB') {
      userN = 'ETH'
    } else {
      userN = 'BNB'
    }
    dispatch(switchNetwork({ userNetwork: userN }))
    // toggleModal();
  }

  const delistNFT = () => {

  }

  const createNFT = async() => {

    if(!nftName || !description || !priceInitial || !priceNow || !image) return

    setIsLoading(true)

    //uploading image

    // const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
    // const added = await client.add(image.file, {
    //   progress: (prog) => console.log(`received: ${prog}`)
    // })
    // // const url = `https://ipfs.infura.io/ipfs/${added.path}`

    // const url = ``

    //values for create_nft call

    const values = {
      image: image,
      // project: project,
      name: nftName,
      description: description,
      // mintAmt: mintAmt,
      // royalties: royalties,
      // priceInitial: priceInitial,
      // priceNow: priceNow,
      address: user.address,
      url: url
    }

    console.log('values: ', values)

    if (!message.message) {
      dispatch(setMessage({ message: 'NFT Created' }))
    } else {
      dispatch(clearMessage())
    }
    setIsLoading(false)

  }

  return (
    <>
      <div className='mx-5 md:mx-40 sm:mx-10 mt-20 mb-5'>
        <h1 className='text-[25px] font-bold'>Create New NFT</h1>
        <div className={`${styles.element} md:flex md:flex-row`}>
          <FileUploaderDND changeInputFile={setImageAction} otherstyles="justify-self-start"
            img={<Image src={imgPlaceholder} alt={'placeholder'} width={80} height={80}></Image>}
            img2={image} />
          {image ?
            <div className={`${styles.nftImage} mt-5 text-center sm:mt-10 md:text-left`}>
              <Image src={image.file} alt={'nft image'} width={280} height={280}></Image> </div>
            : null}
        </div>

        <div className={styles.element}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="text"
            placeHolder="Name of NFT" title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="NFT name" labelstyles="mb-2" value={nftName} onChange={setNftName} />
        </div>

        <div className={styles.element}>
          <TextArea inputstyles={`shadow-inner border-none focus:outline-none`} maxLength={'300'}
            placeHolder="Say something about your NFT..." title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="NFT description (optional)" labelstyles="mb-2" value={description} onChange={setDescription} />
        </div>

        <div className={styles.element}>
          <Dropdown
            options={[]}
            value={project}
            onChange={handleChange}
            inputstyles={`shadow-inner border-none focus:outline-none`}
            placeHolder="Select Project" title="project" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Add to project" labelstyles="mb-2"
          />
        </div>

        <div className={styles.element}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
            placeHolder="0" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
            label="Amount to mint (optional)" labelstyles="mb-2" value={mintAmt} onChange={setMintAmt} />
        </div>

        <div className={styles.element}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="0"
            placeHolder="0" title="royalties" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
            label="Royalties (optional)" labelstyles="mb-2"
            postfix={"%"} value={royalties} onChange={setRoyalties} />
        </div>

        <div className={`${styles.element} mt-2 border-b border-b-1 border-b-dark-1 flex flex-row`}>

          <h5>Price</h5>
          <div className='ml-3'>
            <Button
              type='button'
              id="switchNP"
              buttonStyles='text-purple-secondary font-light hover:pr-1 pb-1 underline decoration-purple-secondary'
              onClick={() => {
                // switchWNetwork()
              }}
              onMouseEnter={() => setSwitchNetworkBtn(true)}
              onMouseLeave={() => setSwitchNetworkBtn(false)}>
              <div className='flex flex-row'>
                {switchNetworkBtn && <h5 className='self-center mr-1'>{`Switch Network`}</h5>}
                {user.userNetwork == "BNB" ? <Image src={ethImg} alt={'eth'} width={25} height={25}></Image>
                  : <Image src={bnbImg} alt={'bnb'} width={25} height={25}></Image>}
              </div>
            </Button>
          </div>

        </div>

        <div className={`${styles.element} md:flex md:flex-row`}>
          <div className={`md:flex-1 md:mr-3`}>
            <Input rightIcon={{ src: user.userNetwork == "BNB" ? bnbImg: ethImg, alt: 'icon' }} inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
              placeHolder={user.userNetwork == "BNB" ? `0.00 BNB` :`0.00 ETH`} title="initial" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
              label="Initial Price" labelstyles="mb-2" value={priceInitial} onChange={setPriceInitial} />
          </div>
          <div className={`md:flex-1 md:ml-3`}>
            <Input rightIcon={{ src: user.userNetwork == "BNB" ? bnbImg: ethImg, alt: 'icon' }} inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
              placeHolder={user.userNetwork == "BNB" ? `0.00 BNB` :`0.00 ETH`} title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
              label="Buy now (optional)" labelstyles="mb-2" value={priceNow} onChange={setPriceNow} />
          </div>
        </div>

        <div className={styles.element}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="text"
            placeHolder="e.g 0xbc...8976" title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg py-1.5`}
            label="Payout to address" labelstyles="mb-2" value={address} onChange={setAddress} />
        </div>

        <div className={`${styles.element} flex flex-row mb-2 pt-1`}>
          <Button
            type='button'
            id={`create`}
            title={`create`}
            buttonStyles='border border-purple-primary rounded-full py-2 px-2 w-80 mr-5 text-[14px] hover:bg-purple-primary
            bg-background-gradient-btn'
            onClick={() => { createNFT() }}
            label={`Create`} />

          <Button
            type='button'
            id={`delete`}
            title={`delete`}
            buttonStyles='border border-purple-primary rounded-full py-2 px-2 w-40 text-[14px] hover:bg-purple-primary'
            onClick={() => { }}
            label={`Delete`} />

        </div>
      </div>
      {isLoading ? null :
        null
      }
    </>
  );
}
