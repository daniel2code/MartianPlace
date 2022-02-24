import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/Create.module.scss';
// import { DESC } from '../public/contants';
import imgPlaceholder from '../public/images/pic.svg'
import FileUploaderDND from '../components/elements/FileUploaderDND';
import Input from '../components/elements/Input';
import TextArea from '../components/elements/TextArea';
import Dropdown from '../components/elements/DropDown';
import Button from '../components/elements/Button';

export default function Create() {
  const [image, setImage] = useState('');
  const [value, setValue] = useState('');

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
    setValue(event.target.value);
  };
  const setImageAction = (img) => {
    console.log(img);
    setImage(img);
  };

  useEffect(() => {

  }, [image])


  return (
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
        label="NFT name" labelstyles="mb-2"/>
      </div>

      <div className={styles.element}>
      <TextArea inputstyles={`shadow-inner border-none focus:outline-none`} maxLength={'300'}
        placeHolder="Say something about your NFT..." title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
        label="NFT description (optional)" labelstyles="mb-2"/>
    </div>

    <div className={styles.element}>
    <Dropdown
        options={items}
        value={value}
        onChange={handleChange}
        inputstyles={`shadow-inner border-none focus:outline-none`}
        placeHolder="Select Project" title="project" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
        label="Add to project" labelstyles="mb-2"
      />
    </div>

    <div className={styles.element}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
        placeHolder="0" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
        label="Amount to mint (optional)" labelstyles="mb-2"/>
      </div>

      <div className={styles.element}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="0"
        placeHolder="0" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
        label="Royalties (optional)" labelstyles="mb-2"
        postfix={"%"}/>
      </div>

      <div className={`${styles.element} mt-2`}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth}`} type="number" min="0"
        placeHolder="Price" fieldType={'line'} title="price" parentstyles={`border-b border-b-1 border-b-dark-1`}
        disabled={true}/>
      </div>

      <div className={`${styles.element} flex flex-row`}>
      <div className={`flex-1 mr-3`}>
      <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
        placeHolder="0.00 BNB" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1`}
        label="Initial Price" labelstyles="mb-2"/>
      </div>
      <div className={`flex-1 ml-3`}>
      <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="number" min="1"
        placeHolder="0.00 BNB" title="mintAmount" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1`}
        label="Buy now (optional)" labelstyles="mb-2"/>
      </div>
      </div>

      <div className={styles.element}>
        <Input inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`} type="text"
        placeHolder="e.g 0xbc...8976" title="nftName" parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
        label="Payout to address" labelstyles="mb-2"/>
      </div>

      <div className={`${styles.element} flex flex-row mb-2 pt-1`}>
      <Button
            type='button'
            id={`create`}
            title={`create`}
            buttonStyles='border border-purple-primary rounded-full py-2 px-2 w-80 mr-5 text-[14px] hover:bg-purple-primary
            bg-background-gradient-btn'
            onClick={() => { }}
            label={`Create`}/>

      <Button
            type='button'
            id={`delete`}
            title={`delete`}
            buttonStyles='border border-purple-primary rounded-full py-2 px-2 w-40 text-[14px] hover:bg-purple-primary'
            onClick={() => { }}
            label={`Delete`}/>

      </div>
    </div>
  );
}
