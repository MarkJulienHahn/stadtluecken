import client from "../client";
import Footer from "@/Components/Footer";
import Kosmos from "@/Components/Kosmos";

const kosmos = ({ kosmos }) => {
  return (
    <>
      <Kosmos kosmos={kosmos} />
      <Footer />
    </>
  );
};

export default kosmos;

export async function getServerSideProps() {
  const kosmos = await client.fetch(`
  
  * [_type == "kosmos"]{..., "eintrag": eintrag[]{..., "beteiligte": beteiligte[]->{name}, "bilder": bilder[]{..., "bild": bild.asset->{metadata, url}}}}`);
  return {
    props: {
      kosmos,
    },
  };
}
