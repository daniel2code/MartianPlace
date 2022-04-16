import { ethers } from "ethers";
import {getContractData, listingPrice} from "./readdata";
import addresses from "../config/addresses.json";

export const createMarket = async (tokenID, price, royaltyFee, royaltyAddress) => { 
    const contractInstance = await getContractData();
    const listingPrice = await listingPrice();
    const marketAddress = addresses.BSC.nftaddress;
    const marketItems = contractInstance.marketPlace.createMarketItem(
        marketAddress,
        tokenID,
        price,
        royaltyFee,
        royaltyAddress,
        {value: listingPrice}
    )
    return marketItems;
}

export const createSales = async (tokenID, purchaseAmount) => { 
    const contractInstance = await getContractData();
    const marketAddress = addresses.BSC.nftaddress;
    const marketSales = contractInstance.marketPlace.createMarketSale(
        marketAddress,
        tokenID,
        {value: purchaseAmount}
    )
    return marketSales;
}

export const createNewToken = async (ipfsURI) => { 
    const contractInstance = await getContractData();
    const newToken = contractInstance.nft.createToken(ipfsURI)
    return newToken;
}