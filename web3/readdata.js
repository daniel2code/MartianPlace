import { ethers } from "ethers";
import addresses from "../config/addresses.json";
import abi from "../config/abi.json";

const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    return signer
}

export const getContractData = async () => { 
    const provider = await getProvider();

    let nft = new ethers.Contract(
        addresses.BSC.nftaddress, 
        abi.nftABI, 
        provider
    );
    const marketPlace = new ethers.Contract(
        addresses.BSC.nftmarketaddress,
        abi.marketABI,
        provider
    );
    return {
        "nft" : nft,
        "marketPlace" : marketPlace
    };
}

export const listingPrice = async () => { 
    const contractInstance = await getContractData();
    const listedPrice = await contractInstance.marketPlace.getListingPrice();
    const convertedListingPrice = await listedPrice.toString();
    return convertedListingPrice;
}

// export const fetchUserNFT = async (address) => { 
//     const contractInstance = await getContractData();
//     const gettingUserNFTs = await contractInstance.marketPlace.fetchMyNFTs(address);
//     return gettingUserNFTs;
// }

export const fetchAllItemsCreated = async (address) => { 
    const contractInstance = await getContractData();
    const getmarketData = await contractInstance.marketPlace.fetchItemsCreated(address);
    return getmarketData;
}

export const fetchItems = async () => { 
    const contractInstance = await getContractData();
    const getmarketData = await contractInstance.marketPlace.fetchMarketItems();
    return getmarketData;
}

export const getUserNFTBalance = async (address) => { 
    const contractInstance = await getContractData();
    const userbalance = await contractInstance.nft.balanceOf(address);
    return userbalance.toString();
}

export const checkApproval = async (address) => { 
    const contractInstance = await getContractData();
    const isApproved = await contractInstance.nft.isApprovedForAll(address, addresses.BSC.nftmarketaddress);
    return isApproved;
}

export const getOwnerOfNFT = async (idNumber) => { 
    const contractInstance = await getContractData();
    const ownerAddress = await contractInstance.nft.ownerOf(idNumber);
    return ownerAddress;
}

export const getURI = async (idNumber) => { 
    const contractInstance = await getContractData();
    const uri = await contractInstance.nft.tokenURI(idNumber);
    return uri;
}

