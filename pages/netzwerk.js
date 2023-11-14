import Netzwerk from "@/Components/Netzwerk";
import client from "../client";

const netzwerk = ({ netzwerk, mobile }) => {
  return <Netzwerk netzwerk={netzwerk} mobile={mobile} />;
};

export default netzwerk;

export async function getServerSideProps() {
  const netzwerk = await client.fetch(`
  * [_type == "netzwerk"]{..., "eintrag": eintrag[]{..., "bilder": bilder[]{..., "bild": bild.asset->{url, "dimensions": metadata.dimensions, "blurHash": metadata.blurHash}} , "kategorie": kategorie->{kategorie}, "stadt": stadt->{stadt}}}`);
  return {
    props: {
      netzwerk,
    },
  };
}
