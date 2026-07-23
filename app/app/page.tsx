import Link from "next/link";

export default function Home() {
  return (
    <main className="home">

      <h1>World Stickers Market</h1>

      <p>
        Boutique française spécialisée dans les cartes Panini de la Coupe du Monde 2026.
      </p>

      <div className="buttons">

        <Link href="/equipes">
          Voir les équipes
        </Link>

        <Link href="/recherche">
          Rechercher une carte
        </Link>

      </div>

    </main>
  );
}
