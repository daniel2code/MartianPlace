import Head from 'next/head';
import Image from 'next/image';
import { DESC } from '../public/contants';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martianplace</title>
        <meta name="description" content={DESC}/>
        <meta name="keywords" content='Martian Fuel, entertainment, gaming, music, crypocurrency, blockchain' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/head.ico" />
      </Head>

      <div className='flex flex-col justify-flex-start w-full'>
        <h1>Hello Welcome to Marketplace</h1>
      </div>
      
    </div>
  );
}
