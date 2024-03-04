import { photosGet } from "@/actions/photos-get";
import { Feed } from "@/components/feed/feed";

export default async function PerfilUser({params}: {params: {user: string}}) {
  const { data } = await photosGet()

  if(!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
