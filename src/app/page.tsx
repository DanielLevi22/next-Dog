import { photosGet } from "@/actions/photos-get";
import { Feed } from "@/components/feeds/feed";

export default async function Home() {
const data = await photosGet()
 
  return (
    <main className="container mainContainer">
     <Feed 
      photos={data}
     />
    </main>
  );
}
