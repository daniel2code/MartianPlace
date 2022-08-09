import React, { useState } from "react";

import Image from "next/image";
import imgPlaceholder from "../public/images/pic.svg";
import styles from "../styles/Create.module.scss";
import ProfileDivider from "../components/elements/profile-divider";
import FileUploaderDND from "../components/elements/FileUploaderDND";
import Input from "../components/elements/Input";
import TextArea from "../components/elements/TextArea";
import Button from "../components/elements/Button";
import Footer from "../components/widgets/footer/index";
import {
  discordDark,
  instagramDark,
  telegramDark,
  twitterDark,
  twitchDark,
  spotifyDark,
  webDark,
  youtubeDark,
} from "../public/assets/icons";
import { Ring } from "react-awesome-spinners";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="mx-5 md:mx-40 sm:mx-10 mt-20 mb-5">
        <h1 className="text-[25px] font-bold">Edit Profile</h1>

        <div className="mt-12">
          <ProfileDivider title="Profile picture" />
        </div>

        <div className="grid grid-cols-4 gap-12">
          <div
            className={`${styles.element} mt-10 md:mt-6 lg:col-span-1 col-span-4`}
          >
            <div>
              <FileUploaderDND
                imageType={true}
                // changeInputFile={setImageAction}
                otherstyles={`justify-self-start, ${styles.borderRounded}`}
                img={
                  <Image
                    src={imgPlaceholder}
                    alt={"placeholder"}
                    width={80}
                    height={80}
                  />
                }
                // img2={image.image}
              />
            </div>

            {/* {image.image ? (
              <div
                className={`${styles.nftImage} mt-10 md:mt-5 text-center sm:mt-10 md:text-left`}
              >
                <Image
                  src={image.image.file}
                  alt={"nft image"}
                  width={280}
                  height={280}
                />
              </div>
            ) : null} */}
          </div>

          <div className="col-span-4 lg:col-span-3">
            <div className={`${styles.element} mt-10 md:mt-6`}>
              <Input
                inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
                type="text"
                placeHolder="Asurf"
                title="nftName"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="Name"
                labelstyles="mb-2"
              />
            </div>

            <div className={`${styles.element} mt-10 md:mt-6`}>
              <TextArea
                textAreaStyles={`shadow-inner border-none focus:outline-none h-28`}
                maxLength={"80"}
                placeHolder="Say something about your profession..."
                title="aboutProject"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="Short description"
                labelstyles="mb-2"
                cols={3}
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ProfileDivider title="About" />
        </div>

        <div className="grid grid-cols-4 gap-12">
          <div
            className={`${styles.element} mt-10 md:mt-6 lg:col-span-1 col-span-4`}
          >
            <div>
              <FileUploaderDND
                imageType={true}
                // changeInputFile={setImageAction}
                otherstyles={`justify-self-start`}
                img={
                  <Image
                    src={imgPlaceholder}
                    alt={"placeholder"}
                    width={80}
                    height={80}
                  />
                }
                // img2={image.image}
              />
            </div>
          </div>

          <div className="col-span-4 lg:col-span-3">
            <div className={`${styles.element} mt-10 md:mt-6`}>
              <TextArea
                textAreaStyles={`shadow-inner border-none focus:outline-none h-28`}
                maxLength={"1000"}
                placeHolder="Let people know who you are and what you do..."
                title="aboutProject"
                parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
                label="About text"
                labelstyles="mb-2"
                cols={3}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Region"
            labelstyles="mb-2"
          />
        </div>

        <div className="mt-7">
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Occupation"
            labelstyles="mb-2"
          />
        </div>

        <div className="mt-7">
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Genres"
            labelstyles="mb-2"
          />
        </div>

        <div className="mt-12">
          <ProfileDivider title="Socials" />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: webDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Website"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: instagramDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Instagram"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: twitterDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Twitter"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: youtubeDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Youtube"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: twitchDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Twitch"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: telegramDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Telegram"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: discordDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Discord"
            labelstyles="mb-2"
          />
        </div>

        <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
          <Input
            leftIcon={{
              src: spotifyDark,
              alt: "icon",
            }}
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            min="1"
            placeHolder="URL"
            title="initial"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
            label="Spotify"
            labelstyles="mb-2"
          />
        </div>

        <div
          className={`${styles.element} mt-10 md:mt-6 flex flex-row mb-2 pt-1`}
        >
          <Button
            type="button"
            id={`create`}
            title={`Save`}
            buttonStyles="rounded-full px-2 w-80 mr-5 text-[14px] hover:bg-purple-primary
            bg-background-gradient-btn"
          >
            {isLoading ? (
              <div className="h-[10px] pb-12 ml-4">
                <Ring size={32} color={"#fafafa"} sizeUnit={"px"} />{" "}
              </div>
            ) : (
              "Save"
            )}
          </Button>

          <Button
            type="button"
            id={`delete`}
            title={`delete`}
            buttonStyles="border border-purple-primary rounded-full py-2 px-2 w-40 text-[14px] hover:bg-purple-primary"
            label={`Cancel`}
          />
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default EditProfile;
