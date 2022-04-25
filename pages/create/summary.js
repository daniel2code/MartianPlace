import React, { useEffect } from "react";

import Image from "next/image";
import Router, { useRouter } from "next/router";
import NFTImage from "../../assets/images/nft-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addNFT, removeNFT } from "../../store/slices/nftSlice";

const Index = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(router.query);
    fetchImage()
  }, [router.query]);

  const fetchImage = async() => {
    var metadata = `https://ipfs.io/ipfs/${router.query.imageURL}`
    console.log("metadata url: ",  metadata)

    const theJSONData = await fetch(metadata);
    console.log("metadata for img: ",  theJSONData)
  }

  async function loadImgURL(cid, mime, limit) {
    // if (cid == "" || cid == null || cid == undefined) {
    //     return;
    // }
    for await (const file of ipfs.get(cid)) {
        if (file.size > limit) {
            return;
        }
        const content = [];
        if (file.content) {
            for await(const chunk of file.content) {
                content.push(chunk);
            }
            return URL.createObjectURL(new Blob(content, {type: mime}));
        }
    }
}

  return (
    <div className="mx-2 md:mx-40 mx-10 mt-20 mb-5">
      <h1 className="md:text-[40px] text-[30px] font-bold">Summary new NFT</h1>
      <div className="flex flex-col md:flex-row gap-x-12 mt-5">
        <div className="flex basis-full md:basis-4/12 flex-col">
          <Image 
          src={NFTImage}
          // src={"http://127.0.0.1:8080/ipfs/"+ router.query.imageURL}
           alt="nft visual description" />
        </div>
        <div className="flex basic-full md:basis-8/12 flex-col">
          <h2 className="text-[25px] font-bold">{router.query.name}</h2>
          <p className="py-3">{router.query.description}</p>

          <div className="py-3">
            <h3 className="text-[16px] font-bold">Attached to project</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.project || 'none'}
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-[16px] font-bold">Royalties</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.royalties || '0.00'}
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-[16px] font-bold">Initial price</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.priceInitial || '0.00'} BNB
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-[16px] font-bold">Buy now</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.priceNow || '0.00'} BNB
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-[16px] font-bold">Payout address</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.address}
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-[16px] font-bold">Share option</h3>
            <p style={{ color: "#A3ABB7" }} className="text-[16px] py-1">
            {router.query.mintAsPublic !== 'public' ? 'Private, only visable for you in your wallet':
            'Public, visable for you in your wallet and publicly on the marketplace.' }
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-20">
        <button
          className="rounded-[50px] px-10 py-1 border border-pink sm:w-full md:w-2/12"
          onClick={() => {
            dispatch(addNFT(router.query));
            Router.back();
          }}
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
  );
};

export default Index;
