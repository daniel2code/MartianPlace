import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch } from "react-redux"

import { setMessage, clearMessage } from '../store/slices/messageSlice'

import styles from '../styles/Create.module.scss';
// import { DESC } from '../public/contants';
import imgPlaceholder from '../public/images/pic.svg'
import FileUploaderDND from '../components/elements/FileUploaderDND';
import Input from '../components/elements/Input';
import TextArea from '../components/elements/TextArea';
import Dropdown from '../components/elements/DropDown';
import Button from '../components/elements/Button';
import Alert from '../components/alert';

export default function Create() {

  const dispatch = useDispatch();

  const [image, setImage] = useState('');
  const [project, setProject] = useState('');
  const [nftName, setNftName] = useState('');
  const [description, setDescription] = useState('');
  const [mintAmt, setMintAmt] = useState('')
  const [royalties, setRoyalties] = useState('')
  const [priceInitial, setPriceInitial] = useState('')
  const [priceNow, setPriceNow] = useState('')
  const [address, setAddress] = useState('')

  const [isLoading, setIsLoading] = useState(false)

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

  }, [image])

  const deleteNFT = () => {

  }

  const createNFT = () => {
    setIsLoading(true)
    const values = {
      image: image,
      project: project,
      nftName: nftName,
      description: description,
      mintAmt: mintAmt,
      royalties: royalties,
      priceInitial: priceInitial,
      priceNow: priceNow,
      address: address,
    }

    console.log('values: ', values)
    dispatch(setMessage({message: 'NFT Created'}))
    setIsLoading(false)

  }

  return (
    <>
    <div>
      <h1 className='text-[25px] font-bold'>Create New NFT</h1>
      <div className={`${styles.element} flex flex-row`}>
        <FileUploaderDND changeInputFile={setImageAction} otherstyles="justify-self-start"
          img={<Image src={imgPlaceholder} alt={'placeholder'} width={80} height={80}></Image>}
          img2={image} />
        {image ?
          <div className={`${styles.nftImage}`}>
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
          options={items}
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

      <div className={`${styles.element} mt-2`}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth}`} type="number" min="0"
          placeHolder="Price" fieldType={'line'} title="price" parentstyles={`border-b border-b-1 border-b-dark-1`}
          disabled={true} />
      </div>

      <div className={`${styles.element} flex flex-row`}>
        <div className={`flex-1 mr-3`}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
            placeHolder="0.00 BNB" title="initial" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1`}
            label="Initial Price" labelstyles="mb-2" value={priceInitial} onChange={setPriceInitial} />
        </div>
        <div className={`flex-1 ml-3`}>
          <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
            placeHolder="0.00 BNB" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1`}
            label="Buy now (optional)" labelstyles="mb-2" value={priceNow} onChange={setPriceNow} />
        </div>
      </div>

      <div className={styles.element}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="text"
          placeHolder="e.g 0xbc...8976" title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
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
