import Head from "next/head";
import client from "../client";
import Impressum from "@/Components/Impressum";

const datenschutz = ({ datenschutz }) => {

  return (
    <>
      <Head>
        <title>Stadtlücken e.V. | Impressum</title>
        <meta name="description" content="STADTLUECKEN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Impressum content={datenschutz[0]} />
      </div>
    </>
  );
};

export default datenschutz;

export async function getServerSideProps() {
  const datenschutz = await client.fetch(`* [_type == "datenschutz"]{...
  }`);
  return {
    props: {
      datenschutz,
    },
  };
}
