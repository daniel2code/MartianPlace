import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { setMessage, clearMessage } from "../store/slices/messageSlice";
import { switchNetwork } from "../store/slices/userSlice";

import styles from "../styles/Create.module.scss";
// import { DESC } from '../public/contants';
import imgPlaceholder from "../public/images/pic.svg";
import FileUploaderDND from "../components/elements/FileUploaderDND";
import Input from "../components/elements/Input";
import TextArea from "../components/elements/TextArea";
import Dropdown from "../components/elements/DropDown";
import Button from "../components/elements/Button";
import bnbImg from "../public/images/bnb.svg";
import ethImg from "../public/images/eth.svg";

import { create } from "ipfs-http-client";
import Web3 from "web3";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import { nftaddress, nftmarketaddress } from "../config";

import nftABI from "../nftABI.json";
import marketABI from "../marketABI.json";

import { Ring } from "react-awesome-spinners";
import Router from "next/router";
import { connectWallet } from "../components/Layout";

export default function Create() {
  const { active } = useWeb3React();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);

  const [project, setProject] = useState("");
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [mintAmt, setMintAmt] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [priceInitial, setPriceInitial] = useState("");
  const [priceNow, setPriceNow] = useState("");
  const [address, setAddress] = useState("");
  const [properties, setProperties] = useState([]);
  const [showProperties, setShowProperties] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [switchNetworkBtn, setSwitchNetworkBtn] = useState(false);
  const [buffer, setBuffer] = useState(null);

  const items = [
    {
      label: "January",
      value: "january",
    },
    {
      label: "February",
      value: "february",
    },
    {
      label: "March",
      value: "march",
    },
  ];

  const handleChange = (event) => {
    setProject(event.target.value);
  };
  const setImageAction = (img) => {
    console.log(img);
    setImage(img);
  };

  function handleChangeInput(i, value, name, theFields, setTheFields) {
    const values = [...theFields];
    // console.log(theFields);

    values[i][name] = value;
    setTheFields(values);
    // console.log(fields);
  }

  function handleAdd(theFields, setTheFields) {
    const values = [...theFields];
    // values.push({ value: null });
    values.push({
      Type: "",
      Value: "",
    });
    setTheFields(values);
  }

  function handleRemove(i, theFields, setTheFields) {
    const values = [...theFields];
    values.splice(i, 1);
    setTheFields(values);
  }

  useEffect(() => {
    if (user && user.address) {
      setAddress(user.address);
    }
    if (user && !user.userNetwork) {
      dispatch(switchNetwork({ userNetwork: "BNB" }));
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

  const switchWNetwork = () => {
    //Disconnect wallet, connect to wallet, get response or reload the page and connect again

    var userN = user.userNetwork;
    if (userN == "BNB") {
      userN = "ETH";
    } else {
      userN = "BNB";
    }
    dispatch(switchNetwork({ userNetwork: userN }));
    // toggleModal();
  };

  const delistNFT = () => {};

  const confirmCreate = async () => {
    let props = [];
    properties.forEach((x) => {
      props.push({ type: x.Type, value: x.Value });
    });

    console.log("props: ", props);

    if (!nftName || !description || !image || !address || !priceNow) {
      dispatch(
        setMessage({
          message: "Missing Information!",
          description: `The nft name, image and receipient's address are required.`,
          buttons: JSON.stringify([
            { name: "OK", action: "close", fullcolor: true, lg: false },
          ]),
        })
      );
      return;
    }
    // if(!nftName || !description || !priceInitial || !priceNow || !image || !properties) return

    setIsLoading(true);
    let ipfs = undefined;
    //uploading image
    try {
      console.log("imgpath not null", image.imgPath);

      ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
      });

      const metadata = {
        name: nftName,
        description: description,
        image: `https://ipfs.infura.io/ipfs/${image.imgPath}`,
        properties: props,
      };

      console.log("metadata obj: ", metadata);

      const result2 = await ipfs.add(Buffer(JSON.stringify(metadata)));
      console.log("result2: ", result2);
      setUrl(result2.path);
      ipfs = undefined;

      //get signer
      // window.ethereum.enable()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("after provider....: ");

      const signer = provider.getSigner();
      console.log("after signer: ");

      let contract = new ethers.Contract(nftaddress, nftABI, signer);
      const marketPlace = new ethers.Contract(
        nftmarketaddress,
        marketABI,
        signer
      );
      // console.log("after contract: ", contract)
      console.log("after marketplace: ", marketPlace);
      console.log("connected user addr: ", address);
      // const marketItems = await marketPlace.fetchItemsCreated(address)
      // console.log("Market items: ", marketItems)

      // const getData = await marketPlace.
      let transition = await contract.createToken(`ipfs://${result2.path}/`, {
        from: address,
      });
      console.log("transition: ", transition);

      if (transition.hash) {
        dispatch(
          setMessage({
            message: "NFT Created",
            description:
              "Congratulations your NFT has been successfully created on Martian Place.",
            buttons: JSON.stringify([
              { name: "List NFT", action: "close", fullcolor: true, lg: true },
              // {name: "Cancel", action: 'route', routepath: '/', fullcolor: false, lg: false}
            ]),
          })
        );

        contract.filters.Transfer();
        contract.on("Transfer", async (from, to, amount, event) => {
          let tokenId = event.args.tokenId.toNumber();
          console.log("tokenId: ", tokenId);

          const price = ethers.utils.parseUnits(priceNow, "ether");

          let listingPrice = await marketPlace.getListingPrice();
          listingPrice = listingPrice.toString();
          console.log("listingPrice: ", listingPrice);

          let transition2 = await marketPlace.createMarketItem(
            nftaddress,
            tokenId,
            price,
            { value: listingPrice }
          );
          transition2 = await marketPlace.createMarketSale(
            nftaddress,
            tokenId,
            { value: listingPrice }
          );

          if (transition2.hash) {
            dispatch(
              setMessage({
                message: "NFT Listed",
                description:
                  "Congratulations your NFT has been successfully listed on Martian Place.",
                buttons: JSON.stringify([
                  {
                    name: "View NFT",
                    action: "route",
                    routepath: "/",
                    fullcolor: true,
                    lg: true,
                  },
                  {
                    name: "Cancel",
                    action: "route",
                    routepath: "/",
                    fullcolor: false,
                    lg: false,
                  },
                ]),
              })
            );
            setIsLoading(false);

            //reset form
            setUrl(null);

            // Router.push('/')
          }
        });
      }
    } catch (error) {
      console.error("Create NFT error: ", error);
      dispatch(
        setMessage({
          message: "Failed to Create NFT",
          description: "",
          buttons: JSON.stringify([
            { name: "Try again", action: "close", fullcolor: true, lg: true },
            {
              name: "Cancel",
              action: "route",
              routepath: "/",
              fullcolor: false,
              lg: false,
            },
          ]),
        })
      );
      setIsLoading(false);
    }
  };

  const createNFT = async () => {
    const values = {
      image: image.image,
      project: project,
      name: nftName,
      description: description,
      mintAmt: mintAmt,
      royalties: royalties,
      priceInitial: priceInitial,
      priceNow: priceNow,
      address: address,
      properties: properties,
    };

    console.log("values: ", values);

    if (!active) {
      dispatch(
        setMessage({
          message: "Connect Wallet to continue.",
          size: "small",
          description: "",
          buttons: JSON.stringify([
            { name: "OK", action: "close", fullcolor: true, lg: false },
          ]),
        })
      );
    } else {
      confirmCreate();
    }
  };

  return (
    <>
      <div className="mx-5 md:mx-40 sm:mx-10 mt-20 mb-5">
        <h1 className="text-[25px] font-bold">Create New NFT</h1>
        <div className={`${styles.element} md:flex md:flex-row mt-10 md:mt-6`}>
          <FileUploaderDND
            changeInputFile={setImageAction}
            otherstyles="justify-self-start"
            img={
              <Image
                src={imgPlaceholder}
                alt={"placeholder"}
                width={80}
                height={80}
              ></Image>
            }
            img2={image.image}
          />
          {image.image ? (
            <div
              className={`${styles.nftImage} mt-10 md:mt-5 text-center sm:mt-10 md:text-left`}
            >
              <Image
                src={image.image.file}
                alt={"nft image"}
                width={280}
                height={280}
              ></Image>{" "}
            </div>
          ) : null}
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            placeHolder="Name of NFT"
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="NFT name"
            labelstyles="mb-2"
            value={nftName}
            onChange={setNftName}
          />
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <TextArea
            inputstyles={`shadow-inner border-none focus:outline-none`}
            maxLength={"300"}
            placeHolder="Say something about your NFT..."
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="NFT description (optional)"
            labelstyles="mb-2"
            value={description}
            onChange={setDescription}
          />
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <Dropdown
            options={[]}
            value={project}
            onChange={handleChange}
            inputstyles={`shadow-inner border-none focus:outline-none`}
            placeHolder="Select Project"
            title="project"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg`}
            label="Add to project"
            labelstyles="mb-2"
          />
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="1"
            placeHolder="0"
            title="mintAmount"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
            label="Amount to mint (optional)"
            labelstyles="mb-2"
            value={mintAmt}
            onChange={setMintAmt}
          />
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="number"
            min="0"
            placeHolder="0"
            title="royalties"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg ${styles.numberInputWidth} px-3`}
            label="Royalties (optional)"
            labelstyles="mb-2"
            postfix={"%"}
            value={royalties}
            onChange={setRoyalties}
          />
        </div>

        <div className={`${styles.element} mt-10 md:my-10`}>
          <div className="flex items-center">
            <Input type="radio" />
            <p className="text-[15px] ml-4">
              Private, only visable for you in your wallet
            </p>
          </div>

          <div className="flex items-center mt-5">
            <Input type="radio" />
            <p className="text-[15px] ml-4">
              Public, other people can see and buy your NFT
            </p>
          </div>
        </div>

        <div
          className={`${styles.element} mt-12 md:mt-8 border-b border-b-1 border-b-dark-1 flex flex-row`}
        >
          <h5>Price</h5>
          <div className="ml-3">
            <Button
              type="button"
              id="switchNP"
              buttonStyles="text-purple-secondary font-light hover:pr-1 pb-1 underline decoration-purple-secondary"
              onClick={() => {
                // switchWNetwork()
              }}
              onMouseEnter={() => setSwitchNetworkBtn(true)}
              onMouseLeave={() => setSwitchNetworkBtn(false)}
            >
              <div className="flex flex-row">
                {switchNetworkBtn && (
                  <h5 className="self-center mr-1">{`Switch Network`}</h5>
                )}
                {user.userNetwork == "BNB" ? (
                  <Image
                    src={ethImg}
                    alt={"eth"}
                    width={25}
                    height={25}
                  ></Image>
                ) : (
                  <Image
                    src={bnbImg}
                    alt={"bnb"}
                    width={25}
                    height={25}
                  ></Image>
                )}
              </div>
            </Button>
          </div>
        </div>

        <div className={`${styles.element} md:flex md:flex-row`}>
          <div className={`md:flex-1 md:mr-3 mt-10 md:mt-6`}>
            <Input
              rightIcon={{
                src: user.userNetwork == "BNB" ? bnbImg : ethImg,
                alt: "icon",
              }}
              inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
              type="number"
              min="1"
              placeHolder={user.userNetwork == "BNB" ? `0.00 BNB` : `0.00 ETH`}
              title="initial"
              parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
              label="Initial Price"
              labelstyles="mb-2"
              value={priceInitial}
              onChange={setPriceInitial}
            />
          </div>
          <div className={`md:flex-1 md:ml-3 mt-10 md:mt-6`}>
            <Input
              rightIcon={{
                src: user.userNetwork == "BNB" ? bnbImg : ethImg,
                alt: "icon",
              }}
              inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
              type="number"
              min="1"
              placeHolder={user.userNetwork == "BNB" ? `0.00 BNB` : `0.00 ETH`}
              title="mintAmount"
              parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
              label="Buy now (optional)"
              labelstyles="mb-2"
              value={priceNow}
              onChange={setPriceNow}
            />
          </div>
        </div>

        <div className={`${styles.element} mt-10 md:mt-6`}>
          <Input
            inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
            type="text"
            placeHolder="e.g 0xbc...8976"
            title="nftName"
            parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg py-1.5`}
            label="Payout to address"
            labelstyles="mb-2"
            value={address}
            onChange={setAddress}
          />
        </div>

        <div
          className={`${styles.element} mt-12 md:mt-8 border-b border-b-1 border-b-dark-1 flex flex-row`}
        >
          <h5>Properties</h5>
        </div>

        <div className={`${styles.element} mt-6 md:mt-3`}>
          <div className={`mt-8 md:mt-0 flex flex-row`}>
            <span>
              {"What unique features make up your NFT? (Add to list below)"}{" "}
            </span>
            {properties.length > 0 && (
              <a
                title="Collapse Properties"
                className="ml-4 md:ml-2 text-purple-primary underline"
                onClick={() => setShowProperties(!showProperties)}
              >
                {" "}
                Collapse
              </a>
            )}
          </div>

          <div>
            <Button
              type="button"
              id={`addProp`}
              title={`addProp`}
              buttonStyles="border border-purple-primary rounded-full mt-8 md:mt-4 py-2 px-2 w-40 text-[14px] hover:bg-purple-primary"
              onClick={() => {
                handleAdd(properties, setProperties);
                setShowProperties(true);
              }}
              label={`Add a Property`}
            />
          </div>
          <div
            className={`${
              showProperties
                ? "visible md:grid md:grid-cols-2 md:gap-6 mt-8 md:mt-4"
                : "hidden"
            }`}
          >
            {properties.map((field, idx) => {
              return (
                <div
                  key={`${field}-${idx}`}
                  className={`${styles.outline} rounded-md border-1 mb-10 md:mb-0 ${styles.element}`}
                >
                  <div className={`md:flex md:flex-row`}>
                    <div className={`md:flex-1 md:mr-1 mt-10 md:mt-6`}>
                      <Input
                        inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
                        placeHolder={`Type`}
                        title="type of property"
                        parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
                        value={properties[idx]["Type"]}
                        onChange={(val) => {
                          handleChangeInput(
                            idx,
                            val,
                            "Type",
                            properties,
                            setProperties
                          );
                        }}
                      />
                    </div>
                    <div className={`md:flex-1 md:ml-1 mt-10 md:mt-6`}>
                      <Input
                        inputstyles={`shadow-inner border-none focus:outline-none ${styles.inputWidth} ${styles.inputWrapper}`}
                        placeHolder={`Value`}
                        title="value of property"
                        parentstyles={`rounded-md border border-1 border-dark-1 bg-nft-input-bg px-3 py-1.5`}
                        value={properties[idx]["Value"]}
                        onChange={(val) => {
                          handleChangeInput(
                            idx,
                            val,
                            "Value",
                            properties,
                            setProperties
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      type="button"
                      id={`removeProp`}
                      title={`removeProp`}
                      buttonStyles="border border-purple-primary rounded-full float-right my-8 md:my-4 py-2 px-2 w-40 text-[14px] hover:bg-purple-primary"
                      onClick={() => {
                        handleRemove(idx, properties, setProperties);
                      }}
                      label={`Remove`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
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
            onClick={() => {
              createNFT();
            }}
          >
            {isLoading && !url ? (
              <div className="h-[10px] pb-12 ml-4">
                <Ring size={32} color={"#fafafa"} sizeUnit={"px"} />{" "}
              </div>
            ) : (
              "Create"
            )}
          </Button>

          <Button
            type="button"
            id={`delete`}
            title={`delete`}
            buttonStyles="border border-purple-primary rounded-full py-2 px-2 w-40 text-[14px] hover:bg-purple-primary"
            onClick={() => {}}
            label={`Delete`}
          />
        </div>
      </div>
      {isLoading ? null : null}
    </>
  );
}
