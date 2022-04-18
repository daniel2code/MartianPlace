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
    <section className="mt-12">
      <div className="flex items-center justify-center flex-wrap px-4">
        <div>
          <Image src={martian} />
        </div>
        <div className="ml-0 md:ml-12">
          <h2 className="text-[48px] font-bold text-pink">
            Marketplace for creative pioneers
          </h2>
          <p className="text-white text-[21px]">
            Buy, sell and discover rare digital NFT art, cards and collectibles
          </p>
          <div className="flex mt-12">
            <button onClick={()=> Router.push("/discover")} className="bg-pink rounded-[50px] px-10 py-3 bg-gradient-to-r from-button-border-pink to-pink">
              Discover
            </button>
            <button onClick={()=> {
              getUserSignature();
              
            }} className="rounded-[50px] px-10 py-3 ml-4 border border-pink">
              Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;