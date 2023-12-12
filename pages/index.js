import Head from "next/head";
import Landing from "@/Components/Landing";

import client from "../client";

export default function Home({ stadtluecken, mitglieder }) {
  return (
    <>
      <Head>
        <title>Stadtlücken e.V.</title>
        <meta name="description" content="STADTLUECKEN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing stadtluecken={stadtluecken[0]} mitglieder={mitglieder} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const stadtluecken = await client.fetch(`* [_type == "stadtluecken"]{...
  }`);
  const mitglieder = await client.fetch(
    `* [_type == "mitglieder"]|order(orderRank)`
  );
  return {
    props: {
      stadtluecken,
      mitglieder,
    },
  };
}
