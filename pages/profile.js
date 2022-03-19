import React from 'react';
import Image from 'next/image';
import {
  blockchain,
  copy,
  descIcon,
  film,
  game,
  mask,
  penEdit,
} from '../assets/icons';
import { imgUploadIcon } from '../public/assets/icons';
import Card, { NftCard } from '../components/elements/card';
import { asufProfile } from '../public/assets/images';
import CardList from '../components/widgets/card-list';
import ProfileDivider from '../components/elements/profile-divider';
const Profile = () => {
  return (
    <section>
      <section className="flex items-center justify-between px-4 lg:px-40 mt-16">
        <div>
          <h3 className="text-[2.5rem] font-bold">Asurf</h3>
        </div>
        <div className="flex items-center">
          <button className="text-xs lg:text-sm px-4 py-2 rounded-md bg-transparent-black flex items-center ml-2">
            <span>Edit Cover Photo</span>
            <span className="ml-1 ">
              <Image
                src={imgUploadIcon}
                className="flex items-center justify-center"
              />
            </span>
          </button>
          <button className="text-xs lg:text-sm p-4 rounded-md bg-transparent-black ml-4 px-4 py-2">
            <span>Edit Profile</span>
            <span className="ml-1 ">
              <Image
                src={penEdit}
                className="flex items-center justify-center"
              />
            </span>
          </button>
        </div>
      </section>
      <section className="grid grid-col-1 lg:grid-cols-3 gap-5 px-4 lg:px-40 mt-8">
        <div className="lg:col-span-1 col-span-3 mb-4 md:mb-0 m-auto">
          <div className="w-full md:w-auto ">
            <Image src={asufProfile} clas3sName="rounded-lg" />
          </div>
          <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 mt-4">
            <div className="flex items-center">
              <Image src={blockchain} /> <span className="ml-8">Details</span>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm font-light">Region</div>
              <div className="text-sm font-light flex items-center">
                <span className="text-light-grey-1">Africa</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm font-light">Occupation</div>
              <div className="text-sm font-light flex items-center">
                <span className="text-light-grey-1">Movie Producer</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm font-light">Genre</div>
              <div className="text-sm font-light flex items-center">
                <span className="text-light-grey-1">Romance, Comedy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-3">
          <div className="flex items-start py-6 border border-light-grey-2 bg-line-light rounded-lg px-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <Image src={mask} />
              </div>
              <div className="ml-5">
                <h5 className="text-sm text-pink">Asuf</h5>
                <h6 className="text-sm">Film maker on Netflix</h6>
              </div>
            </div>
          </div>
          <div className="flex items-start mt-3 py-6 border border-light-grey-2 bg-line-light rounded-lg px-5">
            <div className="ml-6">
              <div className="flex items-center">
                <Image src={descIcon} />
                <h4 className="ml-4">About</h4>
              </div>

              <p className="text-base font-light mt-3 mb-6">
                {
                  'Asurf Oluseyi is an award-winning filmmaker, who learn his trade watching YouTube videos and practicing with training manuals. He was featured on Google African Connected Campaign which run across Africa and CNN respectively as an inspiration to young Africans taking advantage of internet in learning their skills and building careers for themselves.'
                }
              </p>
              <p className="text-base font-light mt-3 mb-6">
                {
                  'He has trained over many individuals on the "Art of Filmaking and Editing" and has successfully build one of the biggest independent production house in Nigeria, "Asurf Films" He has produced and directed hundreds of video contents both in UK, USA and Nigeria, with credits for contents on local and cable TV channels with Awards to his work.'
                }
              </p>
              <p className="text-base font-light mt-3 mb-6">
                {
                  'He has produced and directed 2 short films Hell or High Water (Won Best Short Film at IFAB, International Film Awards, Berlin 2016 and got 7 International Selections) and A Day with Death, which got 10 International Selections, and Won Best Short Film at AMVCA 2016.'
                }
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 lg:px-40 mt-6">
          <ProfileDivider title="Projects" />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:px-40 px-4">
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </div>
        <div className="px-4 lg:px-40 mt-6">
          <ProfileDivider />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-40 px-4 gap-4">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </section>
    </section>
  );
};

export default Profile;
