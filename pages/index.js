import Head from 'next/head';
import Image from 'next/image';
import { arts, film, game, music } from '../assets/icons';
import Card from '../components/elements/card';
import About from '../components/sections/about';
import Main from '../components/sections/home';
import CardList from '../components/widgets/card-list';
import Spotlight from '../components/widgets/spotlight';
import { DESC } from '../public/contants';

export default function Home() {
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
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </CardList>
        <Spotlight />

        <CardList icon={film} title="Film">
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </CardList>
        <CardList icon={game} title="Game">
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </CardList>
        <CardList icon={music} title="Music">
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </CardList>
        <CardList icon={arts} title="Arts">
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
          <Card
            charName="Cyberpunkez"
            title="Game"
            moreDetail="9 available NFT’s"
            description="In Night City, a mercenary known as V navigates a dystopian society"
          />
        </CardList>
        <About />
      </div>
    </div>
  );
}
