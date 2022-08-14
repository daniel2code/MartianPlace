import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arts, film, game, music } from "../assets/icons";
import Card from "../components/elements/card";
import TabGroup from "../components/elements/tab/tab-group";
import CardList from "../components/widgets/card-list";
import { artNft, filmNft, gameNft, musicNft } from "../store/data";

export default function Discover() {
  const buyNft = (nft) => {};

  useEffect(() => {});
  const [activeTab, setActiveTab] = useState("all");

  const renderAllNfts = () => {
    return (
      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container px-4">
          <CardList>
            {gameNft &&
              gameNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
          <CardList>
            {filmNft &&
              filmNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
          <CardList>
            {artNft &&
              artNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/arts/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
          <CardList>
            {musicNft &&
              musicNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
        </div>
      </div>
    );
  };
  const renderFilmNfts = () => {
    return (
      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container px-4">
          <CardList>
            {filmNft &&
              filmNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>{" "}
        </div>
      </div>
    );
  };

  const renderArtNfts = () => {
    return (
      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container px-4">
          <CardList>
            {artNft &&
              artNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/arts/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
        </div>
      </div>
    );
  };

  const renderMusicNfts = () => {
    return (
      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container px-4">
          <CardList>
            {musicNft &&
              musicNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
        </div>
      </div>
    );
  };

  const renderGameNfts = () => {
    return (
      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container px-4">
          <CardList>
            {gameNft &&
              gameNft.map(
                ({ charName, title, moreDetail, description, url, id }) => (
                  <Link href={`/nfts/film/${id}`} key={id}>
                    <div>
                      <Card
                        charName={charName}
                        title={title}
                        moreDetail={moreDetail}
                        description={description}
                        img={url}
                      />
                    </div>
                  </Link>
                )
              )}
          </CardList>
        </div>
      </div>
    );
  };

  return (
    <section className="px-0 mt-12 ">
      <div className="w-11/12 lg:w-4/5 m-auto">
        <h1 className="text-3xl font-bold">Discover</h1>
        <div className="mt-12">
          <TabGroup active={activeTab} setActive={setActiveTab} />
        </div>
      </div>

      <section>
        {activeTab === "all" && renderAllNfts()}
        {activeTab === "game" && renderGameNfts()}
        {activeTab === "film" && renderFilmNfts()}
        {activeTab === "music" && renderMusicNfts()}
        {activeTab === "arts" && renderArtNfts()}
      </section>
    </section>
  );
}
