import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { switchNetwork } from '../store/slices/userSlice';

import styles from '../styles/Create.module.scss';
import imgPlaceholder from '../public/images/pic.svg';
import FileUploaderDND from '../components/elements/FileUploaderDND';
import Input from '../components/elements/Input';
import TextArea from '../components/elements/TextArea';
import Dropdown from '../components/elements/DropDown';
import Button from '../components/elements/Button';
import bnbImg from '../public/images/bnb.svg';
import ethImg from '../public/images/eth.svg';
import {
  discordDark,
  instagramDark,
  telegramDark,
  twitterDark,
} from '../public/assets/icons';

import { Ring } from 'react-awesome-spinners';
import ProfileDivider from '../components/elements/profile-divider';

const EditProject = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [image, setImage] = useState('');
  const [url, setUrl] = useState(null);

  const [project, setProject] = useState('');
  const [nftName, setNftName] = useState('');
  const [description, setDescription] = useState('');
  const [royalties, setRoyalties] = useState('');
  const [priceInitial, setPriceInitial] = useState('');
  const [priceNow, setPriceNow] = useState('');
  const [address, setAddress] = useState('');
  const [properties, setProperties] = useState([]);
  const [showProperties, setShowProperties] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [buffer, setBuffer] = useState(null);

  const handleChange = event => {
    setProject(event.target.value);
  };
  const setImageAction = img => {
    console.log(img);
    setImage(img);
  };

  useEffect(() => {
    if (user && user.address) {
      setAddress(user.address);
    }
    if (user && !user.userNetwork) {
      dispatch(switchNetwork({ userNetwork: 'BNB' }));
    }
  }, [
    image,
    user,
    buffer,
    nftName,
    description,
    showProperties,
    properties,
    royalties,
    project,
    priceInitial,
    priceNow,
    address,
    url,
  ]);

  return (
    <>
      <div className="mx-5 md:mx-40 sm:mx-10 mt-20 mb-5">
        <h1 className="text-[25px] font-bold">Edit Project</h1>
        <div className="grid grid-cols-4 gap-12">
          <div
            className={`${styles.element} mt-10 md:mt-6 lg:col-span-1 col-span-4`}
          >
            <div>
              <FileUploaderDND
                changeInputFile={setImageAction}
                otherstyles="justify-self-start"
                img={
                  <Image
                    src={imgPlaceholder}
                    alt={'placeholder'}
                    width={80}
                    height={80}
                  />
                }
                img2={image.image}
              />
            </div>

            {image.image ? (
              <div
                className={`${styles.nftImage} mt-10 md:mt-5 text-center sm:mt-10 md:text-left`}
              >
                <Image
                  src={image.image.file}
                  alt={'nft image'}
                  width={280}
                  height={280}
                />
              </div>
            ) : null}
          </div>

          <div className="col-span-4 lg:col-span-3">
            <div className={`${styles.element} mt-10 md:mt-6`}>
              <Input
                inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
                type="text"
                placeHolder="Project Name"
                title="nftName"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="Project Name"
                labelstyles="mb-2"
              />
            </div>
            <div className={`${styles.element} mt-10 md:mt-6`}>
              <Dropdown
                options={[]}
                value={project}
                onChange={handleChange}
                inputstyles={`shadow-inner border-none focus:outline-none`}
                placeHolder="Select Category"
                title="Category"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="Category"
                labelstyles="mb-2"
              />
            </div>
            <div className={`${styles.element} mt-10 md:mt-6`}>
              <TextArea
                textAreaStyles={`shadow-inner border-none focus:outline-none h-48`}
                maxLength={'500'}
                placeHolder="Say something about your Project..."
                title="aboutProject"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="Project description (optional)"
                labelstyles="mb-2"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <ProfileDivider title="Teaser / trailer" />
        </div>
        <div className="grid grid-cols-4 gap-12">
          <div
            className={`${styles.element} mt-10 md:mt-6 lg:col-span-1 col-span-4`}
          >
            <div>
              <FileUploaderDND
                changeInputFile={setImageAction}
                otherstyles="justify-self-start"
                img={
                  <Image
                    src={imgPlaceholder}
                    alt={'placeholder'}
                    width={80}
                    height={80}
                  />
                }
                img2={image.image}
              />
            </div>

            {image.image ? (
              <div
                className={`${styles.nftImage} mt-10 md:mt-5 text-center sm:mt-10 md:text-left`}
              >
                <Image
                  src={image.image.file}
                  alt={'nft image'}
                  width={280}
                  height={280}
                />
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-3 col-span-4 flex items-center justify-center mt-[-5rem]"></div>
        </div>

        <div className="mt-12">
          <ProfileDivider title="Donation" />
        </div>
        <p className="text-sm mt-4">
          Do you want people to donate to your project besides buying your NFT?
        </p>
        <div className={`${styles.element} md:my-4 flex items-center`}>
          <div className="flex items-center">
            <Input type="radio" />
            <p className="text-[15px] ml-4">Yes</p>
          </div>

          <div className="flex items-center ml-4">
            <Input type="radio" />
            <p className="text-[15px] ml-4">No</p>
          </div>
        </div>

        <div
          className={`${styles.element} mt-12 md:mt-8 border-b border-b-1 border-b-dark-1 flex flex-row`}
        >
          <p
            className="text-sm mt-4
            "
          >
            How many funds are you trying to raise?
          </p>
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            rightIcon={{
              src: user.userNetwork == 'BNB' ? bnbImg : ethImg,
              alt: 'icon',
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder={user.userNetwork == 'BNB' ? `0.00 BNB` : `0.00 ETH`}
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Initial Price"
            labelstyles="mb-2"
            value={priceInitial}
            onChange={setPriceInitial}
          />
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <TextArea
            textAreaStyles={`shadow-inner border-none focus:outline-none h-48`}
            maxLength={'500'}
            placeHolder="Let people know why these funds are needed..."
            title="aboutProject"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Description about the funds"
            labelstyles="mb-2"
          />
        </div>

        <div className="mt-12">
          <ProfileDivider title="Socials" />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: instagramDark,
              alt: 'icon',
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder=""
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Instagram"
            labelstyles="mb-2"
            value={priceInitial}
            onChange={setPriceInitial}
          />
        </div>
        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: twitterDark,
              alt: 'icon',
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder=""
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Twitter"
            labelstyles="mb-2"
            value={priceInitial}
            onChange={setPriceInitial}
          />
        </div>
        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: discordDark,
              alt: 'icon',
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder=""
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Discord"
            labelstyles="mb-2"
            value={priceInitial}
            onChange={setPriceInitial}
          />
        </div>
        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: telegramDark,
              alt: 'icon',
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder=""
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Telegram"
            labelstyles="mb-2"
            value={priceInitial}
            onChange={setPriceInitial}
          />
        </div>

        <div
          className={`${styles.element} mt-10 md:mt-6 flex flex-row mb-2 pt-1`}
        >
          <Button
            type="button"
            id={`create`}
            title={`create`}
            buttonStyles="border border-purple-primary rounded-full px-2 w-80 mr-5 text-[14px] hover:bg-purple-primary
            bg-background-gradient-btn"
          >
            {isLoading && !url ? (
              <div className="h-[10px] pb-12 ml-4">
                <Ring size={32} color={'#fafafa'} sizeUnit={'px'} />{' '}
              </div>
            ) : (
              'Create'
            )}
          </Button>

          <Button
            type="button"
            id={`delete`}
            title={`delete`}
            buttonStyles="border border-purple-primary rounded-full py-2 px-2 w-40 text-[14px] hover:bg-purple-primary"
            label={`Delete`}
          />
        </div>
      </div>
    </>
  );
};

export default EditProject;
