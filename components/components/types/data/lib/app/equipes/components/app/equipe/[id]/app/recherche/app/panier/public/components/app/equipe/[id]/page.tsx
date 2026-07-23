import CardGrid from "@/components/CardGrid";

export default async function Team({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  return (

    <main className="container">

      <h1>{id.toUpperCase()}</h1>

      <CardGrid />

    </main>

  );

}
