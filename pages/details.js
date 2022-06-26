import Image from "next/image";
import React from "react";
import {
  smallDp,
  penEdit,
  binance,
  descIcon,
  blockchain,
  copy,
  trending,
  listing,
  sale,
  created,
} from "../assets/icons";
import Card from "../components/elements/card";
import ListItem from "../components/elements/list-item";
import Footer from "../components/widgets/footer/index";

const Details = () => {
  return (
    <section>
      <div className="mx-2 md:mx-40 mx-6 mt-20 mb-5">
        <div className="grid grid-col-1 lg:grid-cols-3 gap-0 lg:gap-8">
          <div className="lg:col-span-1 col-span-2 mb-4 lg:mb-0 m-auto">
            <div className="w-full md:w-auto">
              <Card title="Movie" />
            </div>
            <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg px-5 mt-4">
              <div className="flex items-center">
                <Image src={blockchain} /> <span className="ml-8">Details</span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm font-light">Contact Address</div>
                <div className="text-sm font-light flex items-center">
                  <span className="text-pink">0x4579f...75be5e</span>
                  <span className="ml-3 flex items-center justify-center">
                    <Image src={copy} />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm font-light">Token ID</div>
                <div className="text-sm font-light flex items-center">
                  <span className="">5626497123734</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm font-light">Minted</div>
                <div className="text-sm font-light text-pink flex items-center">
                  <span className="">4</span>
                  <span className="ml-1 mr-1">of</span>
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <small className="text-base font-light">
              Created By <span className="text-pink">Asuf</span>
            </small>
            <div>
              <h2 className="text-[44px] font-bold">Mama Africa #4</h2>
            </div>
            <div className="flex items-center">
              <div>
                <Image src={smallDp} />
              </div>
              <div className="text-sm ml-4">
                Created By <span className="text-pink">MarianLion</span>
              </div>
            </div>
            <div className="flex items-end justify-between ">
              <div></div>
              <div className="flex items-center hover:border hover:border-white transition-all duration-500 ease-linear px-4">
                Delist NFT
                <span className="ml-6">
                  <Image src={penEdit} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 py-6 border border-light-grey-2 bg-line-light rounded-lg px-5">
              <div className="flex items-center">
                <Image src={binance} />
                <span className="ml-6">12,5 BNB</span>
              </div>
              <div>
                <button className="w-[140px] bg-gradient-to-r from-button-border-pink to-pink py-3 px-8 rounded-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mt-6 py-6 border border-light-grey-2 bg-line-light rounded-lg px-5">
              <div className="flex">
                <Image src={descIcon} height={30} width={30} />
                <h4 className="ml-5">Description</h4>
              </div>

              <div className="mt-4">
                <p className="text-base font-light mt-3 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Learn more
                  about the project
                </p>
                <p className="text-base font-light">
                  Learn More about
                  <span className="text-pink"> &nbsp;the project</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-scroll w-screen md:w-auto">
          <div className="py-6 border border-light-grey-2 bg-line-light rounded-lg mt-4">
            <div className="flex items-center justify-between px-8 mb-6">
              <div className="flex items-center">
                <Image src={trending} /> <div className="ml-4">Trending</div>
              </div>
              <div className="">
                <select className="bg-transparent text-light-grey-1 border border-light-grey-2 px-5 py-2 rounded-xl">
                  <option value="">Select...</option>
                  <option value="">Bitcoin</option>
                  <option value="">Etherum</option>
                  <option value="">Algorand</option>
                </select>
              </div>
            </div>

            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base">
                <div>Type</div>
                <div>From</div>
                <div>Price</div>
                <div>To</div>
                <div>Date</div>
              </div>
            </ListItem>
            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base ">
                <div className="flex items-center">
                  <Image src={listing} />
                  <span className="ml-4">Listing</span>
                </div>
                <div className="flex items-center">
                  <Image src={smallDp} />
                  <span className="ml-4">BitCollector</span>
                </div>
                <div className="flex items-center">
                  <Image src={binance} />
                  <span className="ml-4 font-bold text-white">0.35 </span>
                  <span className="text-light-grey-1 ml-2">($385.05)</span>
                </div>
                <div></div>
                <div>
                  <span className="text-light-grey-1">2 Secs Ago</span>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base">
                <div className="flex items-center">
                  <Image src={sale} />
                  <span className="ml-4">Sale</span>
                </div>
                <div className="flex items-center">
                  <Image src={smallDp} />
                  <span className="ml-4">premium_nfts</span>
                </div>
                <div className="flex items-center">
                  <Image src={binance} />
                  <span className="ml-4 font-bold text-white">0.35 </span>
                  <span className="text-light-grey-1 ml-2">($385.05)</span>
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start flex-wrap">
                    <Image src={smallDp} />
                    <span className="ml-4 text-pink">Mr Harry</span>
                  </div>
                </div>
                <div>
                  <span className="text-light-grey-1">2 Secs Ago</span>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base">
                <div className="flex items-center">
                  <Image src={listing} />
                  <span className="ml-4">Listing</span>
                </div>
                <div className="flex items-center">
                  <Image src={smallDp} />
                  <span className="ml-4">DrBurry</span>
                </div>
                <div className="flex items-center">
                  <Image src={binance} />
                  <span className="ml-4 font-bold text-white">0.35 </span>
                  <span className="text-light-grey-1 ml-2">($385.05)</span>
                </div>
                <div></div>
                <div>
                  <span className="text-light-grey-1">2 Secs Ago</span>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base">
                <div className="flex items-center">
                  <Image src={listing} />
                  <span className="ml-4">Listing</span>
                </div>
                <div className="flex items-center">
                  <Image src={smallDp} />
                  <span className="ml-4">NFThodler</span>
                </div>
                <div className="flex items-center">
                  <Image src={binance} />
                  <span className="ml-4 font-bold text-white">0.35 </span>
                  <span className="text-light-grey-1 ml-2">($385.05)</span>
                </div>
                <div></div>
                <div>
                  <span className="text-light-grey-1">2 Secs Ago</span>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className="grid grid-cols-5 justify-between items-center text-xs md:text-base">
                <div className="flex items-center">
                  <Image src={created} />
                  <span className="ml-4">Created</span>
                </div>
                <div className="flex items-center">
                  <Image src={smallDp} />
                  <span className="ml-4">CryptoBull</span>
                </div>
                <div className="flex items-center">
                  <Image src={binance} />
                  <span className="ml-4 font-bold text-white">0.35 </span>
                  <span className="text-light-grey-1 ml-2">($385.05)</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <Image src={smallDp} />
                    <span className="ml-4 text-pink">Mr Harry</span>
                  </div>
                </div>
                <div>
                  <span className="text-light-grey-1">2 Secs Ago</span>
                </div>
              </div>
            </ListItem>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>{" "}
    </section>
  );
};

export default Details;
