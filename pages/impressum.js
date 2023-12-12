import Head from "next/head";
import client from "../client";
import Impressum from "@/Components/Impressum";

const impressum = ({ impressum }) => {

  return (
    <>
      <Head>
        <title>Stadtlücken e.V. | Impressum</title>
        <meta name="description" content="STADTLUECKEN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Impressum content={impressum[0]} />
      </div>
    </>
  );
};

export default impressum;

export async function getServerSideProps() {
  const impressum = await client.fetch(`* [_type == "impressum"]{...
  }`);
  return {
    props: {
      impressum,
    },
  };
}
