import client from "../../client";
import Projekt from "@/Components/Projekt/Projekt";
import { useRouter } from "next/router";

const ProjektPage = ({ projekt }) => {

  const router = useRouter();

  const arbeitSingle = projekt.filter(
    (single) => single.slug?.current == router.query.image
  );

  return <Projekt currentProjekt={arbeitSingle[0]} />;
};

export default ProjektPage;

export async function getServerSideProps() {
  const projekt = await client.fetch(`* [_type == "projekte"]{..., 
  
    "bilder": bilder[]
    {..., "bild": bild{..., 
      asset->{metadata, url}
    }}, 
  
    "bildPreview": bildPreview{..., "bild": bild{..., 
      asset->{metadata, url}
    }},
  
  
    "bildUnten": bildUnten{..., "bild": bild{..., 
      asset->{metadata, url}
    }},
    
    "archiv": archiv[]
    {..., "bild": bild{..., asset->{metadata, url}}, 
      
    "kategorie": kategorie->{kategorie}, 
    "kommentare": kommentare[]{"kommentar": kommentar, "name": name->{nickname}}}, 
   }`);
  return {
    props: {
      projekt,
    },
  };
}
