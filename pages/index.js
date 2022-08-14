import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { arts, film, game, music, starCup } from "../assets/icons";
import Card from "../components/elements/card";
import About from "../components/sections/about";
import Main from "../components/sections/home";
import CardList from "../components/widgets/card-list";
import Spotlight from "../components/widgets/spotlight";
import { DESC } from "../public/contants";
import { filmNft, artNft, musicNft, trendingNft, gameNft } from "../store/data";
import Footer from "../components/widgets/footer/index";
import Test from "./test";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Martianplace</title>
        <meta name="description" content={DESC} />
        <meta
          name="keywords"
          content="Martian Fuel, entertainment, gaming, music, crypocurrency, blockchain"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/head.ico" />
      </Head>

      <div className="flex flex-col justify-center w-full items-center">
        <div className="landing-page-container">
          <Main />

          <div className="w-full px-5">
            <CardList icon={starCup} title="Trending Projects" border={true}>
              {trendingNft &&
                trendingNft.map(
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
            <Spotlight />
            <CardList icon={film} title="Film" border={true}>
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
            <CardList icon={game} title="Game" border={true}>
              {gameNft &&
                gameNft.map(
                  ({ charName, title, moreDetail, description, url, id }) => (
                    <Link href={`/nfts/game/${id}`} key={id}>
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
            <CardList icon={music} title="Music" border={true}>
              {musicNft &&
                musicNft.map(
                  ({ charName, title, moreDetail, description, url, id }) => (
                    <Link href={`/nfts/music/${id}`} key={id}>
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
            <CardList icon={arts} title="Arts" border={true}>
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
            <About />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
