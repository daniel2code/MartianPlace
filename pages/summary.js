import React from "react";

import Image from "next/image";
import Router from "next/router";
import NFTImage from "../assets/images/nft-image.jpg";
import Footer from "../components/widgets/footer/index";

const summaryDetails = [
  { name: "Attached to project", text: "Kasanova" },
  { name: "Royalties", text: "15%" },
  { name: "Initial price", text: "2,25 BNB" },
  { name: "Buy now", text: "5,00 BNB" },
  { name: "Payout address", text: "0xca83df4n9900984827192" },
  {
    name: "Share option",
    text: "Private, only visable for you in your wallet",
  },
];

const Index = () => {
  return (
    <>
      <div className="mx-2 md:mx-40 mx-6 mt-20 mb-5">
        <h1 className="md:text-[40px] text-[30px] font-bold">
          Summary new NFT
        </h1>
        <div className="flex flex-col md:flex-row gap-x-12 mt-5">
          <div className="flex basis-full md:basis-4/12 flex-col">
            <Image src={NFTImage} alt="nft visual description" />
          </div>
          <div className="flex basic-full md:basis-8/12 flex-col">
            <h2 className="text-[25px] font-bold">Mama Africa</h2>
            <p className="py-3">
              A romantic comedy about a single dad who falls in love with the
              Mother of his sons Crush. It is a battle for love highlighting
              Family, friendship and love.
            </p>

            {summaryDetails.map((item, i) => {
              return (
                <div className="py-3" key={i}>
                  <h3 className="text-[16px] font-bold">{item.name}</h3>
                  <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-20">
          <button
            className="rounded-[50px] px-10 py-1 border border-pink sm:w-full md:w-2/12"
            onClick={() => Router.back()}
          >
            Back
          </button>
          <button
            className="bg-pink rounded-[50px] mt-5 md:ml-4 px-10 py-1 w-full md:w-4/12"
            style={{
              background:
                "linear-gradient(97.83deg, #7517F8 9.62%, #E423FF 114.65%)",
            }}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
