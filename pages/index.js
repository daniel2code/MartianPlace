import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { arts, film, game, music } from '../assets/icons';
import Card from '../components/elements/card';
import About from '../components/sections/about';
import Main from '../components/sections/home';
import CardList from '../components/widgets/card-list';
import Spotlight from '../components/widgets/spotlight';
import { DESC } from '../public/contants';
import { filmNft, artNft, musicNft, trendingNft, gameNft } from '../store/data';

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

      <div className="flex flex-col justify-flex-start w-full">
        <Main />
        <CardList>
          {trendingNft &&
            trendingNft.map(
              ({ charName, title, moreDetail, description, url, id }) => (
                <Card
                  key={id}
                  charName={charName}
                  title={title}
                  moreDetail={moreDetail}
                  description={description}
                  img={url}
                />
              )
            )}
        </CardList>
        <Spotlight />
        <CardList icon={film} title="Film">
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
        <CardList icon={game} title="Game">
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
        <CardList icon={music} title="Music">
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
        <CardList icon={arts} title="Arts">
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
  );
};

export default Home;
