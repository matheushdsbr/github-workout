import Head from 'next/head';
import Search from '../components/Search';

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Workout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </>
  );
}
