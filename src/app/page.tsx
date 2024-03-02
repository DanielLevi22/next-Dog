import { Feed } from "@/components/feeds/feed";

export default async function Home() {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/phoyo/?_page=1&_total=6&_user=0')
  const data = await response.json();
  console.log(data)
  return (
    <main className="container mainContainer">
     <Feed />
    </main>
  );
}
