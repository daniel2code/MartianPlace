import React from "react";
import styles from "../styles/CreatePage.module.scss";

import Image from "next/image";
import { blockchain } from "../assets/icons";
import videoPicx from "../assets/images/videopix.png";
import CardList from "../components/widgets/card-list";
import { NftCard as Card } from "../components/elements/card";
import ProfileDivider from "../components/elements/profile-divider";
import Footer from "../components/widgets/footer/index";
import Modal from "../components/elements/modal/actionModal";
// import Link from "next/link";
import {
  discordDark,
  instagramDark,
  twitterDark,
  webDark,
} from "../public/assets/icons";
import catImg from "../assets/images/cat.svg";

const Index = () => {
  return (
    <>
      <Modal />
      <div className="mx-2 md:mx-40 mx-6 mt-20 mb-5">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="md:text-[40px] text-[30px] font-bold">Kasanova</h1>

          <div className="flex gap-x-4 ">
            <div
              className={`${styles.actionBox} flex items-center justify-center`}
            >
              <span className="mr-7 text-sm">Edit cover photo</span>
              <Image src={blockchain} />
            </div>

            <div
              className={`${styles.actionBox} flex items-center justify-center`}
            >
              <span className="mr-7 text-sm">Edit project</span>
              <Image src={blockchain} />
            </div>
          </div>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-3 gap-0 lg:gap-8 mt-10">
          <div className="md:col-span-1 col-span-2 mb-4 md:mb-0 m-auto">
            <div className="w-full md:w-auto">
              <Image src={videoPicx} className="rounded-2xl" />
            </div>

            <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 mt-4">
              <div className="flex items-center">
                <Image src={blockchain} />{" "}
                <span className="ml-8">Fuel raised</span>
              </div>

              <p className={`${styles.text1} mt-4`}>
                A description why the funds are needed Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt.
              </p>

              <div className={`${styles.progressBox} w-full mt-5`}>
                <div
                  className={`${styles.progress}`}
                  style={{ width: "40%" }}
                />
              </div>

              <p className={`${styles.text1} mt-4`}>
                <span>3.5 BNB / 50 BNB</span>
              </p>
            </div>

            <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 mt-4">
              <div className="flex items-center">
                <Image src={blockchain} />{" "}
                <span className="ml-8">Fuel raised</span>
              </div>

              <p className={`${styles.text1} mt-5`}>
                In order to keep this project going you can either buy a NFT or
                donate MFuel tokens.
              </p>

              <button className="rounded-[50px] py-1 border border-pink px-6 mt-5">
                Donate
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <div
              className={`${styles.topBox} py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 w-full flex items-center`}
            >
              <div className="flex">
                <Image src={blockchain} />
                <div className={`${styles.titleBox} ml-4`}>
                  <h4 className="">Asurf</h4>
                  <p className="mt-2">Film maker on Netflix</p>
                </div>
              </div>

              <div className={`${styles.line}`}>
                <h4>Category</h4>
                <p className="mt-2">Movie</p>
              </div>

              <div className={`${styles.line}`}>
                <h4>NFT</h4>
                <p className="mt-2">7 NFT’s available</p>
              </div>
            </div>

            <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 w-full mt-7">
              <div className="flex items-center">
                <Image src={blockchain} /> <span className="ml-6">About</span>
              </div>

              <p className={`${styles.text1} mt-5`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
                Quis blandit turpis cursus in hac habitasse. Venenatis urna
                cursus eget nunc scelerisque. Egestas integer eget aliquet nibh
                praesent tristique magna. Eros in cursus <br />
                <br />
                turpis massa tincidunt dui ut ornare. Faucibus in ornare quam
                viverra orci sagittis eu volutpat. Suspendisse potenti nullam ac
                tortor vitae purus faucibus ornare. Vestibulum morbi blandit
                cursus risus. Imperdiet nulla malesuada pellentesque elit eget
                gravida cum sociis natoque. Venenatis a condimentum vitae sapien
                pellentesque. Dignissim sodales ut eu sem integer vitae justo
                eget. Enim diam vulputate ut pharetra sit amet <br />
                <br />
                aliquam. Risus at ultrices mi tempus imperdiet nulla. Ut sem
                viverra aliquet eget sit amet. Morbi quis commodo odio aenean
                sed adipiscing. Eget nunc lobortis mattis aliquam. Sed
                adipiscing diam donec adipiscing tristique risus nec feugiat.
                Pulvinar mattis nunc sed blandit.
              </p>

              <div
                className={`${styles.socialBox} border border-light-grey-2 rounded-lg mt-8 flex`}
              >
                <div
                  className={`${styles.social} w-1/4 flex flex-col items-center justify-center`}
                >
                  <Image src={instagramDark} />
                  <p className="text-xs mt-1">Instagram</p>
                </div>
                <div
                  className={`${styles.social} w-1/4 flex flex-col items-center justify-center`}
                >
                  <Image src={discordDark} />
                  <p className="text-xs mt-1">DISCORD</p>
                </div>
                <div
                  className={`${styles.social} w-1/4 flex flex-col items-center justify-center`}
                >
                  <Image src={twitterDark} />
                  <p className="text-xs mt-1">tWITTER</p>
                </div>
                <div
                  className={`${styles.social} w-1/4 flex flex-col items-center justify-center`}
                >
                  <Image src={webDark} />
                  <p className="text-xs mt-1">WEBSITE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ProfileDivider title="NFT" />
        </div>
      </div>
      <CardList>
        {[...Array(10)].map(() => (
          // <Link href={`/nfts/film/${id}`} key={id}>
          <div>
            <Card title="Movie" img={catImg} />
          </div>
          // </Link>
        ))}
      </CardList>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Index;
