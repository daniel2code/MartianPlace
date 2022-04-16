import { create } from "ipfs-http-client";
import Web3 from "web3";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import addresses from "../config/addresses.json";
import abi from "../config/abi.json";


import { Ring } from "react-awesome-spinners";
import Router from "next/router";
import { connectWallet } from "../components/Layout";