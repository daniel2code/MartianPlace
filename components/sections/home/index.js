import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { martian } from '../../../assets/images';
import Router from 'next/router';
import Web3 from 'web3';
import { ethers } from 'ethers';
import { useWeb3React } from "@web3-react/core";
import Alert from '../../../components/elements/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, setMessage } from '../../../store/slices/messageSlice';
// import { selectCreateAction } from '../../Layout';

const Main = () => {
  const { active, account} = useWeb3React();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    if (account) {
      // console.log("d user address: ")
      // console.log(account)
    }
  }, [account])

  const getUserSignature = async () => {
    if (account) {
      // console.log("d user address: ")
      // console.log(account)
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const signer = provider.getSigner()
    // console.log("sie: ", signer)
    // var web3 = new Web3(window.ethereum);
    // await web3.eth.sign("Hello world", account)

    // const signature = await signer._signTypedData("Hello world")
    // console.log("signature: ", signature)
    // console.log("address from home: ", address)

    // window.ethereum.enable()
    // if (typeof window.ethereum !== 'undefined') {
     
    //   var web3 = new Web3(window.ethereum);
    //   try {
    //     await window.ethereum.enable();
    //     await web3.eth.sign("Hello world", address)
    //   } catch (e) {
        
    //   } finally {
    //     // Router.push("/create");
    // create action selection modal
    selectCreateAction()
    //   }
    // }
    }else { 
      dispatch(setMessage(
        { message: 'Connect to wallet to continue.',
        description: '',
        buttons: JSON.stringify([
          {name: "OK", action: 'close', fullcolor: true, lg: false},
        ])}))
    }
  };

  const selectCreateAction = () => {
    // const dispatch = useDispatch()
    dispatch(
      setMessage({
        message: "none",
        description:
          "none",
        buttons: JSON.stringify([
          {
            name: "Create a Project",
            action: "route",
            routepath: "/project",
            fullcolor: true,
            lg: true,
          },
          {
            name: "Create an NFT",
            action: "route",
            routepath: "/create",
            fullcolor: true,
            lg: true,
          },
        ]),
      })
    );
  }

  return (
    <section className="mt-12 relative mb-44 md:mb-14">
      <div className="flex items-center justify-center flex-wrap px-4">
        <div>
          <Image src={martian} />
        </div>
        <div className="px-5 top-52 md:top-0 absolute md:relative">
          <h2 className="text-[44px] leading-snug sm:text-[48px] font-semibold " style={{color: "#E423FF"}}>
            Marketplace for creative pioneers
          </h2>
          <p className="text-white text-[21px]">
            Buy, sell and discover rare digital NFT art, cards and collectibles
          </p>
          <div className="flex mt-12">
            <button onClick={()=> Router.push("/discover")} className=" rounded-[50px] w-1/2 lg:w-fit px-10 sm:px-14  py-2 bg">
              Discover
            </button>
            <button onClick={()=> {
              getUserSignature();
              
            }} className="rounded-[50px] w-1/2 lg:w-fit px-10 sm:px-14 py-2 ml-4 border border-pink">
              Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;